const URLS = {
    GET_MEMBERS: "https://gitlab.com/api/v4/groups/91social/members/all",
    USER_COMMIT_DATA: (user, after, before) => `https://gitlab.com/api/v4/users/${user}/events?per_page=1000&action=pushed&after=${after}&before=${before}`
};

export default URLS;