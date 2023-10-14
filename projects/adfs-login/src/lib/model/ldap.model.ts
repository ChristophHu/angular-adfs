export class LdapConfig {
    public authtest: string
    public backendUrl: string
    public user_path: string
    public group_path: string

    constructor(authtest: string, backendUrl: string, user_path: string, group_path: string) {
        this.authtest = authtest
        this.backendUrl = backendUrl
        this.user_path = user_path
        this.group_path = group_path
    }
}