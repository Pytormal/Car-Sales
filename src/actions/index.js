export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addedFeature = (add_feature) => {
    return {
        type: ADD_FEATURE,
        payload: add_feature
    }
}

export const removedFeature = (remove_feature) => {
    return {
        type: REMOVE_FEATURE,
        payload: remove_feature
    }
}

