const URLS = {
    GET_MEMBERS: "https://gitlab.com/api/v4/groups/91social/members/all",
    USER_COMMIT_DATA: user => `https://gitlab.com/users/${user}/calendar.json`
};

export default URLS;