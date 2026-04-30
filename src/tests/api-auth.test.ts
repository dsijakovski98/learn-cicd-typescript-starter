import type { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth";
import { describe, expect, test } from "vitest";

describe('API auth - API key is fetched correctly', () => {
    test('Authorization header missing handled', () => {
        expect(getAPIKey({})).toBeNull()
    })

    test('Authorization header missing "ApiKey" protocol', () => {
        const headers: IncomingHttpHeaders = {
            authorization: 'Bearer API_KEY_HERE'
        }

        expect(getAPIKey(headers)).toBeNull()
    })

    test('API key correctly extracted', () => {
        const apiKey = 'API_KEY_HERE'
        const headers: IncomingHttpHeaders = {
            authorization: `ApiKey ${apiKey}`
        }

        // Intentionally broken unit test
        expect(getAPIKey(headers)).toBe(null)
    })
})
