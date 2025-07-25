import {describe, expect, it, vi} from "vitest";
import {URLSearchParamsParser} from "./url-search-params-parser";
import {Container} from "inversify";

describe("parse anime type from url", () => {
    let urlSearchParams: URLSearchParams;

    const container = new Container();
    container.bind(URLSearchParamsParser).toSelf().inSingletonScope();
    const {parseType} = container.get(URLSearchParamsParser)

    function createMockUrlSearchParams(returnValue: string | null): URLSearchParams {
        const mockUrlSearchParams: Partial<URLSearchParams> = {
            get: vi.fn().mockReturnValue(returnValue)
        }
        return mockUrlSearchParams as URLSearchParams;
    }

    it("should parse anime type", () => {
        urlSearchParams = createMockUrlSearchParams("movie")
        const animeType = parseType(urlSearchParams);

        expect(animeType).toEqual("movie");
    })
    it("should return null when url params contains invalid anime type", () => {
        urlSearchParams = createMockUrlSearchParams("invalid anime type")
        const animeType = parseType(urlSearchParams);

        expect(animeType).toEqual(null);
    })
    it("should return null when url params is null", () => {
        urlSearchParams = createMockUrlSearchParams(null)
        const animeType = parseType(urlSearchParams);

        expect(animeType).toEqual(null);
    })
    it("should return null when url params is empty string", () => {
        urlSearchParams = createMockUrlSearchParams("")
        const animeType = parseType(urlSearchParams);

        expect(animeType).toEqual(null);
    })
})