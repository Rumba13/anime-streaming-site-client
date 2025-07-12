import {describe, expect, it, vi} from "vitest";
import {parseAnimeTypeFromUrl} from "./parse-anime-type-from-url.ts";

describe("parse anime type from url", () => {
    let urlSearchParams: URLSearchParams;

    function createMockUrlSearchParams(returnValue:string|null):URLSearchParams {
        const mockUrlSearchParams:Partial<URLSearchParams> = {
            get: vi.fn().mockReturnValue(returnValue)
        }
        return mockUrlSearchParams as URLSearchParams;
    }

    it("should parse anime type", () => {
        urlSearchParams = createMockUrlSearchParams("movie")
        const animeType = parseAnimeTypeFromUrl(urlSearchParams);

        expect(animeType).toEqual("movie");
    })
    it("should return null when url params contains invalid anime type", () => {
        urlSearchParams = createMockUrlSearchParams("invalid anime type")
        const animeType = parseAnimeTypeFromUrl(urlSearchParams);

        expect(animeType).toEqual(null);
    })
    it("should return null when url params is null", () => {
        urlSearchParams = createMockUrlSearchParams(null)
        const animeType = parseAnimeTypeFromUrl(urlSearchParams);

        expect(animeType).toEqual(null);
    })
    it("should return null when url params is empty string", () => {
        urlSearchParams = createMockUrlSearchParams("")
        const animeType = parseAnimeTypeFromUrl(urlSearchParams);

        expect(animeType).toEqual(null);
    })
})