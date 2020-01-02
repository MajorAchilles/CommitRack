const URLS = {
    GET_MEMBERS: "https://gitlab.com/api/v4/groups/91social/members/all",
    USER_COMMIT_DATA: user => `https://gitlab.com/api/v4/users/${user}/events?per_page=10&action=pushed&after=2018-12-26&before=2020-12-01`
};

export default URLS;