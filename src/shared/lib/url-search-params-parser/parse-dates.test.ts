import {describe, expect, it, vi} from "vitest";
import {Container} from "inversify";
import {URLSearchParamsParser} from "./url-search-params-parser";
import {URL_PARAMS} from "../url-params";

describe("parse dates from url params", () => {
    const container = new Container()
    container.bind(URLSearchParamsParser).toSelf().inSingletonScope();
    const {parseDates} = container.get(URLSearchParamsParser);

    function createMockURLSearchParams(mockStartDate: string | null, mockEndDate: string | null): URLSearchParams {
        const urlSearchParams: Partial<URLSearchParams> = {
            get: vi.fn((name: string) => {
                if (name === URL_PARAMS.START_DATE) return mockStartDate
                if (name === URL_PARAMS.END_DATE) return mockEndDate
                return null
            })
        }

        return urlSearchParams as URLSearchParams
    }

    it('should return dates', () => {
        const urlSearchParams = createMockURLSearchParams("2022-11-01", "2022-11-03");
        const [startDate, endDate] = parseDates(urlSearchParams);

        expect(startDate?.format('YYYY-MM-DD')).toBe("2022-11-01");
        expect(endDate?.format('YYYY-MM-DD')).toBe("2022-11-03");
    });
    it('should return no dates', () => {
        const urlSearchParams = createMockURLSearchParams(null, null)

        const [startDate, endDate] = parseDates(urlSearchParams);

        expect([startDate, endDate])
            .toEqual([null,null]);
    });
    it('should return only the first date', () => {
        const urlSearchParams = createMockURLSearchParams("2022-11-01", null);
        const [startDate, endDate] = parseDates(urlSearchParams);

        expect(startDate?.format('YYYY-MM-DD')).toBe("2022-11-01");
        expect(endDate).toBe(null);
    });
    it('should return only the second date', () => {
        const urlSearchParams = createMockURLSearchParams(null, "2022-11-03");
        const [startDate, endDate] = parseDates(urlSearchParams);

        expect(startDate).toBe(null);
        expect(endDate?.format('YYYY-MM-DD')).toBe("2022-11-03");
    });
    it('should return null when parsing invalid date', () => {
        const urlSearchParams = createMockURLSearchParams("aaa-20-11", "2022-11-03");
        const [startDate, endDate] = parseDates(urlSearchParams);

        expect(startDate).toBe(null);
        expect(endDate?.format('YYYY-MM-DD')).toBe("2022-11-03");
    });
})