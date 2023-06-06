import axios from 'axios';

//'status in (Open, "In Progress", Reopened) AND issuetype = "Story"'
const base_url = 'https://nucleus-eti.atlassian.net/rest/api/2';
const token = 'ZWR1YXJkb0BudWNsZXVzLmV0aS5icjpBVEFUVDN4RmZHRjB3eEdINjF2LTRJUkkzRHBrZTJUNmYwenN6UWppTmNram9fQ09oX3pYbFRvV3Z2YllnQ2lxVGxCVC1pYUJSQlVVc2hOMVZSakV5eFI0QlF2ZlBOZDZYVGs2WVFIN3Z2STFSVE8wbmFtMWhqM3JTS1N6R3V3U1FYMXdmTktTN2ZqVkkwYVF3M0c5eWxwQTNMRUlyU1U5d0RpOFNxNno5WTNKMFN2cmZKcEh6cTA9OThBQUI3Qjc=';

export const getProjectList = async (project) => {
    let config = {
        headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/json'
        },
        params: {
            jql: `project=${project}`,
        }
    };

    try {
        const response = await axios.get(base_url + '/search', config);
        return response.data.issues;
    } catch (error) {
        throw new Error(error);
    }
};