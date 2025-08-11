export type FirebaseUser = {
    emailVerified: boolean,
    isAnonymous: boolean,
    metadata: object,
    providerData: UserInfo[],
    refreshToken: string,
    tenantId: string | null,
    email: string,
}