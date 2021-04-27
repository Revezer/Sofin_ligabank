import {loadCourse} from "./action";

export const fetchСourse = () => (dispatch, _getState, api) => (
    api.get()
        .then(({data}) => dispatch(loadCourse(data)))
);
