import {describe, expect, it, vi} from "vitest";
import {parseExcludeGenresFromUrl} from "./parse-exclude-genres-from-url.ts";

describe("parse genre ids from url", () => {

    function createMockURLSearchParams(returnValue: string | null): URLSearchParams {
        const urlSearchParams: Partial<URLSearchParams> = {
            get: vi.fn().mockReturnValue(returnValue)
        }

        return urlSearchParams as URLSearchParams
    }

    it('should return all genre ids', () => {
        const urlSearchParams = createMockURLSearchParams("1,2,3,4")

        const genreIds = parseExcludeGenresFromUrl(urlSearchParams);

        expect(genreIds).toEqual([1, 2, 3, 4]);
    });

    it('should filter out non-numeric genre IDs', () => {
        const urlSearchParams = createMockURLSearchParams("1,b,3,fasd")

        const genreIds = parseExcludeGenresFromUrl(urlSearchParams);

        expect(genreIds).toEqual([1, 3]);
    });
    it('should return empty array when url params is null', () => {
        const urlSearchParams = createMockURLSearchParams(null)

        const genreIds = parseExcludeGenresFromUrl(urlSearchParams);

        expect(genreIds).toEqual([]);
    });
    it('should return empty array when url params is empty string', () => {
        const urlSearchParams = createMockURLSearchParams("")

        const genreIds = parseExcludeGenresFromUrl(urlSearchParams);

        expect(genreIds).toEqual([]);
    });
    it('should filter out duplicate genreIds', () => {
        const urlSearchParams = createMockURLSearchParams("1,2,3,1,2,3")

        const genreIds = parseExcludeGenresFromUrl(urlSearchParams);

        expect(genreIds).toEqual([1, 2, 3]);
    });
})