// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {createSelector} from 'reselect';
import {getPost} from 'mattermost-redux/selectors/entities/posts';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/users';
import {getBool as getBoolPreference} from 'mattermost-redux/selectors/entities/preferences';

import {getGlobalItem} from 'selectors/storage';
import {Preferences, StoragePrefixes} from 'utils/constants';

export const getEditingPost = createSelector(
    (state) => {
        if (state.views.posts.editingPost && state.views.posts.editingPost.postId) {
            return getPost(state, state.views.posts.editingPost.postId);
        }

        return null;
    },
    (state) => state.views.posts.editingPost,
    (post, editingPost) => {
        return {
            ...editingPost,
            post,
        };
    }
);

export function isEmbedVisible(state, postId) {
    const currentUserId = getCurrentUserId(state);
    const previewCollapsed = getBoolPreference(
        state,
        Preferences.CATEGORY_DISPLAY_SETTINGS,
        Preferences.COLLAPSE_DISPLAY,
        Preferences.COLLAPSE_DISPLAY_DEFAULT !== 'false'
    );

    return getGlobalItem(state, StoragePrefixes.EMBED_VISIBLE + currentUserId + '_' + postId, !previewCollapsed);
}

export function shouldShowJoinLeaveMessages(state) {
    return getBoolPreference(state, Preferences.CATEGORY_ADVANCED_SETTINGS, Preferences.ADVANCED_FILTER_JOIN_LEAVE, true);
}

export const getHoveringPost = (state) => {
    if (state.views.posts.hoveringPostId) {
        return getPost(state, state.views.posts.hoveringPostId);
    }

    return null;
};

export const isPostListFocused = (state) => {
    return state.views.posts.postListHasFocus;
};

export function arePostsInSameThread(state, postId1, postId2) {
    if (postId1 === postId2) {
        return true;
    }

    const threads = state.entities.posts.postsInThread;
    const found = Object.keys(threads).find((rootId) => {
        const isRoot = postId1 === rootId || postId2 === rootId;
        if (isRoot) {
            return threads[rootId].includes(postId1) || threads[rootId].includes(postId2);
        }

        return threads[rootId].includes(postId1) && threads[rootId].includes(postId2);
    });

    return Boolean(found);
}
