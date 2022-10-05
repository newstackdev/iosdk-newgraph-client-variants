export declare type AnyResponse = object;
export interface OkResponse {
    ok?: boolean;
}
export interface ErrorResponse {
    errorMessage?: string;
    errorCode?: string;
    statusCode?: number;
}
export interface MoodPagedListReadPublicResponse {
    value?: {
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        description?: string;
        aspectRatio?: number;
        title?: string;
        posts?: {
            coverContentUrl?: string;
            moodId?: string;
            created?: string;
            author?: {
                newcoinTicker?: string;
                youtube?: string;
                powered?: number;
                displayName?: string;
                newcoinAccTx?: string;
                latitude?: number;
                description?: string;
                newcoinPoolId?: string;
                tumblr?: string;
                aspectRatio?: number;
                instagram?: string;
                medium?: string;
                newcoinActivePublicKey?: string;
                soundcloud?: string;
                newcoinPublicKey?: string;
                powering?: number;
                snapchat?: string;
                apple?: string;
                twitter?: string;
                newcoinOwnerPublicKey?: string;
                tiktok?: string;
                reddit?: string;
                youtubeId?: string;
                id?: string;
                newcoinPoolStake?: number;
                contentType?: string;
                signal?: string;
                longitude?: number;
                newcoinPublisherPublicKey?: string;
                website?: string;
                created?: string;
                spotify?: string;
                facebook?: string;
                facebookId?: string;
                fullName?: string;
                telegram?: string;
                pinterest?: string;
                verifiedSocialIds?: string[];
                newcoinPoolTx?: string;
                license?: string;
                contentUrl?: string;
                discord?: string;
                blurHash?: string;
                consentEmail?: string;
                updated?: string;
                username?: string;
            };
            latitude?: number;
            moods?: {
                created?: string;
                author?: {
                    newcoinTicker?: string;
                    youtube?: string;
                    powered?: number;
                    displayName?: string;
                    newcoinAccTx?: string;
                    latitude?: number;
                    description?: string;
                    newcoinPoolId?: string;
                    tumblr?: string;
                    aspectRatio?: number;
                    instagram?: string;
                    medium?: string;
                    newcoinActivePublicKey?: string;
                    soundcloud?: string;
                    newcoinPublicKey?: string;
                    powering?: number;
                    snapchat?: string;
                    apple?: string;
                    twitter?: string;
                    newcoinOwnerPublicKey?: string;
                    tiktok?: string;
                    reddit?: string;
                    youtubeId?: string;
                    id?: string;
                    newcoinPoolStake?: number;
                    contentType?: string;
                    signal?: string;
                    longitude?: number;
                    newcoinPublisherPublicKey?: string;
                    website?: string;
                    created?: string;
                    spotify?: string;
                    facebook?: string;
                    facebookId?: string;
                    fullName?: string;
                    telegram?: string;
                    pinterest?: string;
                    verifiedSocialIds?: string[];
                    newcoinPoolTx?: string;
                    license?: string;
                    contentUrl?: string;
                    discord?: string;
                    blurHash?: string;
                    consentEmail?: string;
                    updated?: string;
                    username?: string;
                };
                latitude?: number;
                description?: string;
                aspectRatio?: number;
                title?: string;
                content?: string;
                stakeToAccess?: number;
                tags?: {
                    _rel?: {
                        displayValue?: string;
                        score?: number;
                        polygons?: string;
                        source?: string;
                        category?: string;
                    }[];
                    id?: string;
                    value?: string;
                }[];
                contentUrl?: string;
                postsCount?: number;
                blurHash?: string;
                id?: string;
                updated?: string;
                contentType?: string;
                longitude?: number;
            }[];
            description?: string;
            aspectRatio?: number;
            title?: string;
            content?: string;
            tags?: {
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            license?: string;
            contentUrl?: string;
            blurHash?: string;
            newcoinMintTx?: string;
            id?: string;
            embed?: string;
            updated?: string;
            contentType?: string;
            longitude?: number;
        }[];
        content?: string;
        stakeToAccess?: number;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        contentUrl?: string;
        postsCount?: number;
        blurHash?: string;
        id?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    done?: boolean;
}
export interface UploadRequest {
    filename: string;
    targetId: string;
    targetModel: string;
    contentType: string;
}
export interface UploadRequestGeneric {
    filename: string;
    targetId: string;
    contentType: string;
}
export interface UploadResponse {
    filename?: string;
    key?: string;
    url?: string;
}
export interface UserReadPublicResponse {
    newcoinTicker?: string;
    youtube?: string;
    powered?: number;
    displayName?: string;
    newcoinAccTx?: string;
    latitude?: number;
    description?: string;
    newcoinPoolId?: string;
    tumblr?: string;
    aspectRatio?: number;
    instagram?: string;
    medium?: string;
    newcoinActivePublicKey?: string;
    soundcloud?: string;
    newcoinPublicKey?: string;
    powering?: number;
    snapchat?: string;
    apple?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    youtubeId?: string;
    id?: string;
    newcoinPoolStake?: number;
    contentType?: string;
    signal?: string;
    longitude?: number;
    newcoinPublisherPublicKey?: string;
    website?: string;
    created?: string;
    spotify?: string;
    facebook?: string;
    facebookId?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    contentUrl?: string;
    discord?: string;
    blurHash?: string;
    consentEmail?: string;
    updated?: string;
    username?: string;
}
export interface UserReadPrivateResponse {
    powered?: number;
    newcoinAccTx?: string;
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    stripeUid?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    subscriptionExpiry?: string;
    created?: string;
    availableInvites?: number;
    facebookId?: string;
    newcoinPoolTx?: string;
    verifiedSocialIds?: string[];
    firstName?: string;
    license?: string;
    discord?: string;
    phone?: string;
    updated?: string;
    status?: string;
    newcoinTicker?: string;
    youtube?: string;
    lastName?: string;
    consentPrivacyPolicy?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    consentTestgroup?: string;
    newcoinPrivateKey?: string;
    subscriptionStatus?: string;
    newcoinPublisherPrivateKey?: string;
    youtubeId?: string;
    newcoinPoolStake?: number;
    email?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    contentUrl?: string;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
}
export interface UserStakeRequest {
    amount: string;
    key?: string;
    username: string;
}
export interface UserTransferRequest {
    encryptedPayload?: string;
    payload?: string;
}
export interface UserCreateRequest {
    newcoinTicker?: string;
    youtube?: string;
    lastName?: string;
    consentPrivacyPolicy?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    instagram?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    consentTestgroup?: string;
    twitter?: string;
    legacyToken?: string;
    tiktok?: string;
    reddit?: string;
    signal?: string;
    email?: string;
    longitude?: number;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    firstName?: string;
    discord?: string;
    phone: string;
    consentEmail?: string;
    /** @pattern ^[a-z0-5\.]{2,9}\.io$ */
    username?: string;
}
export interface UserPreRegisterRequest {
    consentTestgroup?: string;
    consentPrivacyPolicy?: string;
    phone: string;
    fullName?: string;
    consentEmail?: string;
    email?: string;
}
export interface UserAvailabilityResponse {
    offer?: string;
    available?: boolean;
}
export interface UserUpdateRequest {
    youtube?: string;
    lastName?: string;
    consentPrivacyPolicy?: string;
    displayName?: string;
    latitude?: number;
    newcoinCreateAccount?: string;
    description?: string;
    tumblr?: string;
    instagram?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    twitter?: string;
    tiktok?: string;
    reddit?: string;
    id: string;
    signal?: string;
    longitude?: number;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    firstName?: string;
    discord?: string;
    consentEmail?: string;
}
export interface SyncContactsRequest {
    contacts?: {
        birthday?: string;
        identifier?: string;
        androidAccountName?: string;
        displayName?: string;
        prefix?: string;
        givenName?: string;
        jobTitle?: string;
        phones?: {
            label?: string;
            value?: string;
        }[];
        avatar?: string;
        suffix?: string;
        postalAddresses?: {
            country?: string;
            city?: string;
            street?: string;
            postcode?: string;
            label?: string;
            region?: string;
        }[];
        emails?: {
            label?: string;
            value?: string;
        }[];
        androidAccountType?: string;
        familyName?: string;
        middleName?: string;
        company?: string;
        androidAccountTypeRaw?: string;
    }[];
}
export declare type SyncContactsResponse = any;
export interface UserUploadRequest {
    filename: string;
    contentType: string;
}
export interface UserPagedListReadPublicResponse {
    value?: {
        newcoinTicker?: string;
        youtube?: string;
        powered?: number;
        displayName?: string;
        newcoinAccTx?: string;
        latitude?: number;
        description?: string;
        newcoinPoolId?: string;
        tumblr?: string;
        aspectRatio?: number;
        instagram?: string;
        medium?: string;
        newcoinActivePublicKey?: string;
        soundcloud?: string;
        newcoinPublicKey?: string;
        powering?: number;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        youtubeId?: string;
        id?: string;
        newcoinPoolStake?: number;
        contentType?: string;
        signal?: string;
        longitude?: number;
        newcoinPublisherPublicKey?: string;
        website?: string;
        created?: string;
        spotify?: string;
        facebook?: string;
        facebookId?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        contentUrl?: string;
        discord?: string;
        blurHash?: string;
        consentEmail?: string;
        updated?: string;
        username?: string;
    }[];
    done?: boolean;
}
export interface UserInvitationPagedListReadPublicResponse {
    value?: {
        newcoinTicker?: string;
        youtube?: string;
        powered?: number;
        displayName?: string;
        newcoinAccTx?: string;
        latitude?: number;
        description?: string;
        newcoinPoolId?: string;
        tumblr?: string;
        aspectRatio?: number;
        instagram?: string;
        medium?: string;
        newcoinActivePublicKey?: string;
        soundcloud?: string;
        newcoinPublicKey?: string;
        powering?: number;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        youtubeId?: string;
        id?: string;
        newcoinPoolStake?: number;
        contentType?: string;
        signal?: string;
        longitude?: number;
        newcoinPublisherPublicKey?: string;
        website?: string;
        created?: string;
        invitation?: {
            youtube?: string;
            spotify?: string;
            facebook?: string;
            tumblr?: string;
            telegram?: string;
            pinterest?: string;
            instagram?: string;
            medium?: string;
            soundcloud?: string;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            discord?: string;
            tiktok?: string;
            reddit?: string;
            signal?: string;
        };
        spotify?: string;
        facebook?: string;
        facebookId?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        contentUrl?: string;
        discord?: string;
        blurHash?: string;
        consentEmail?: string;
        updated?: string;
        username?: string;
    }[];
    done?: boolean;
}
export interface UserInvitationReadPublicResponse {
    newcoinTicker?: string;
    youtube?: string;
    powered?: number;
    displayName?: string;
    newcoinAccTx?: string;
    latitude?: number;
    description?: string;
    newcoinPoolId?: string;
    tumblr?: string;
    aspectRatio?: number;
    instagram?: string;
    medium?: string;
    newcoinActivePublicKey?: string;
    soundcloud?: string;
    newcoinPublicKey?: string;
    powering?: number;
    snapchat?: string;
    apple?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    youtubeId?: string;
    id?: string;
    newcoinPoolStake?: number;
    contentType?: string;
    signal?: string;
    longitude?: number;
    newcoinPublisherPublicKey?: string;
    website?: string;
    created?: string;
    invitation?: {
        youtube?: string;
        spotify?: string;
        facebook?: string;
        tumblr?: string;
        telegram?: string;
        pinterest?: string;
        instagram?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        discord?: string;
        tiktok?: string;
        reddit?: string;
        signal?: string;
    };
    spotify?: string;
    facebook?: string;
    facebookId?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    contentUrl?: string;
    discord?: string;
    blurHash?: string;
    consentEmail?: string;
    updated?: string;
    username?: string;
}
export interface UserInviteRequest {
    youtube?: string;
    spotify?: string;
    facebook?: string;
    fullName: string;
    tumblr?: string;
    telegram?: string;
    pinterest?: string;
    instagram?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    twitter?: string;
    discord?: string;
    phone: string;
    tiktok?: string;
    reddit?: string;
    signal?: string;
    email?: string;
}
export interface UserDeleteRequest {
    phone?: string;
    email?: string;
}
export interface RatingUpdateRequest {
    targetId?: string;
    contextType?: string;
    contextValue?: string;
    /**
     * @min 0
     * @max 100
     */
    value: number;
}
export interface PagedRatedResponseUser {
    value?: {
        newcoinTicker?: string;
        youtube?: string;
        powered?: number;
        displayName?: string;
        newcoinAccTx?: string;
        latitude?: number;
        rating?: {
            created?: string;
            value?: number;
            updated?: string;
        };
        description?: string;
        newcoinPoolId?: string;
        tumblr?: string;
        aspectRatio?: number;
        instagram?: string;
        medium?: string;
        newcoinActivePublicKey?: string;
        soundcloud?: string;
        newcoinPublicKey?: string;
        powering?: number;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        youtubeId?: string;
        id?: string;
        newcoinPoolStake?: number;
        contentType?: string;
        signal?: string;
        longitude?: number;
        newcoinPublisherPublicKey?: string;
        website?: string;
        created?: string;
        spotify?: string;
        facebook?: string;
        facebookId?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        contentUrl?: string;
        discord?: string;
        blurHash?: string;
        consentEmail?: string;
        updated?: string;
        username?: string;
    }[];
    done?: boolean;
}
export interface PagedRatedResponsePost {
    value?: {
        coverContentUrl?: string;
        moodId?: string;
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        moods?: {
            created?: string;
            author?: {
                newcoinTicker?: string;
                youtube?: string;
                powered?: number;
                displayName?: string;
                newcoinAccTx?: string;
                latitude?: number;
                description?: string;
                newcoinPoolId?: string;
                tumblr?: string;
                aspectRatio?: number;
                instagram?: string;
                medium?: string;
                newcoinActivePublicKey?: string;
                soundcloud?: string;
                newcoinPublicKey?: string;
                powering?: number;
                snapchat?: string;
                apple?: string;
                twitter?: string;
                newcoinOwnerPublicKey?: string;
                tiktok?: string;
                reddit?: string;
                youtubeId?: string;
                id?: string;
                newcoinPoolStake?: number;
                contentType?: string;
                signal?: string;
                longitude?: number;
                newcoinPublisherPublicKey?: string;
                website?: string;
                created?: string;
                spotify?: string;
                facebook?: string;
                facebookId?: string;
                fullName?: string;
                telegram?: string;
                pinterest?: string;
                verifiedSocialIds?: string[];
                newcoinPoolTx?: string;
                license?: string;
                contentUrl?: string;
                discord?: string;
                blurHash?: string;
                consentEmail?: string;
                updated?: string;
                username?: string;
            };
            latitude?: number;
            description?: string;
            aspectRatio?: number;
            title?: string;
            content?: string;
            stakeToAccess?: number;
            tags?: {
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            contentUrl?: string;
            postsCount?: number;
            blurHash?: string;
            id?: string;
            updated?: string;
            contentType?: string;
            longitude?: number;
        }[];
        rating?: {
            created?: string;
            value?: number;
            updated?: string;
        };
        description?: string;
        aspectRatio?: number;
        title?: string;
        content?: string;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        license?: string;
        contentUrl?: string;
        blurHash?: string;
        newcoinMintTx?: string;
        id?: string;
        embed?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    done?: boolean;
}
export interface RatingUpdateResponse {
    created?: string;
    /**
     * @min 0
     * @max 100
     */
    value?: number;
    updated?: string;
}
export interface ReportUpdateRequest {
    reason: string;
    targetId: string;
    comment?: string;
}
export interface ReportUpdateResponse {
    id?: number;
}
export interface PostCreateResponse {
    coverContentUrl?: string;
    moodId?: string;
    created?: string;
    author?: {
        newcoinTicker?: string;
        youtube?: string;
        powered?: number;
        displayName?: string;
        newcoinAccTx?: string;
        latitude?: number;
        description?: string;
        newcoinPoolId?: string;
        tumblr?: string;
        aspectRatio?: number;
        instagram?: string;
        medium?: string;
        newcoinActivePublicKey?: string;
        soundcloud?: string;
        newcoinPublicKey?: string;
        powering?: number;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        youtubeId?: string;
        id?: string;
        newcoinPoolStake?: number;
        contentType?: string;
        signal?: string;
        longitude?: number;
        newcoinPublisherPublicKey?: string;
        website?: string;
        created?: string;
        spotify?: string;
        facebook?: string;
        facebookId?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        contentUrl?: string;
        discord?: string;
        blurHash?: string;
        consentEmail?: string;
        updated?: string;
        username?: string;
    };
    latitude?: number;
    moods?: {
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        description?: string;
        aspectRatio?: number;
        title?: string;
        content?: string;
        stakeToAccess?: number;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        contentUrl?: string;
        postsCount?: number;
        blurHash?: string;
        id?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    description?: string;
    aspectRatio?: number;
    title?: string;
    content?: string;
    tags?: {
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
        id?: string;
        value?: string;
    }[];
    license?: string;
    contentUrl?: string;
    blurHash?: string;
    newcoinMintTx?: string;
    id?: string;
    embed?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
}
export interface PostReadResponse {
    coverContentUrl?: string;
    moodId?: string;
    created?: string;
    author?: {
        newcoinTicker?: string;
        youtube?: string;
        powered?: number;
        displayName?: string;
        newcoinAccTx?: string;
        latitude?: number;
        description?: string;
        newcoinPoolId?: string;
        tumblr?: string;
        aspectRatio?: number;
        instagram?: string;
        medium?: string;
        newcoinActivePublicKey?: string;
        soundcloud?: string;
        newcoinPublicKey?: string;
        powering?: number;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        youtubeId?: string;
        id?: string;
        newcoinPoolStake?: number;
        contentType?: string;
        signal?: string;
        longitude?: number;
        newcoinPublisherPublicKey?: string;
        website?: string;
        created?: string;
        spotify?: string;
        facebook?: string;
        facebookId?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        contentUrl?: string;
        discord?: string;
        blurHash?: string;
        consentEmail?: string;
        updated?: string;
        username?: string;
    };
    latitude?: number;
    moods?: {
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        description?: string;
        aspectRatio?: number;
        title?: string;
        content?: string;
        stakeToAccess?: number;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        contentUrl?: string;
        postsCount?: number;
        blurHash?: string;
        id?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    description?: string;
    aspectRatio?: number;
    title?: string;
    content?: string;
    tags?: {
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
        id?: string;
        value?: string;
    }[];
    license?: string;
    contentUrl?: string;
    blurHash?: string;
    newcoinMintTx?: string;
    id?: string;
    embed?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
}
export interface PostCreateRequest {
    license?: string;
    doMint?: string;
    description?: string;
    embed?: string;
    title?: string;
    contentType?: string;
    content?: string;
}
export interface PostUpdateRequest {
    license?: string;
    latitude?: number;
    doMint?: boolean;
    description?: string;
    id: string;
    title?: string;
    longitude?: number;
}
export interface PostPagedListReadPublicResponse {
    value?: {
        coverContentUrl?: string;
        moodId?: string;
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        moods?: {
            created?: string;
            author?: {
                newcoinTicker?: string;
                youtube?: string;
                powered?: number;
                displayName?: string;
                newcoinAccTx?: string;
                latitude?: number;
                description?: string;
                newcoinPoolId?: string;
                tumblr?: string;
                aspectRatio?: number;
                instagram?: string;
                medium?: string;
                newcoinActivePublicKey?: string;
                soundcloud?: string;
                newcoinPublicKey?: string;
                powering?: number;
                snapchat?: string;
                apple?: string;
                twitter?: string;
                newcoinOwnerPublicKey?: string;
                tiktok?: string;
                reddit?: string;
                youtubeId?: string;
                id?: string;
                newcoinPoolStake?: number;
                contentType?: string;
                signal?: string;
                longitude?: number;
                newcoinPublisherPublicKey?: string;
                website?: string;
                created?: string;
                spotify?: string;
                facebook?: string;
                facebookId?: string;
                fullName?: string;
                telegram?: string;
                pinterest?: string;
                verifiedSocialIds?: string[];
                newcoinPoolTx?: string;
                license?: string;
                contentUrl?: string;
                discord?: string;
                blurHash?: string;
                consentEmail?: string;
                updated?: string;
                username?: string;
            };
            latitude?: number;
            description?: string;
            aspectRatio?: number;
            title?: string;
            content?: string;
            stakeToAccess?: number;
            tags?: {
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            contentUrl?: string;
            postsCount?: number;
            blurHash?: string;
            id?: string;
            updated?: string;
            contentType?: string;
            longitude?: number;
        }[];
        description?: string;
        aspectRatio?: number;
        title?: string;
        content?: string;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        license?: string;
        contentUrl?: string;
        blurHash?: string;
        newcoinMintTx?: string;
        id?: string;
        embed?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    done?: boolean;
}
export interface PostTagsSearchPublicResponse {
    done?: object;
    value?: {
        created?: string;
        tag?: string;
    }[];
}
export interface PostRemoteMetaProxyResponse {
    text?: string;
    status?: number;
}
export interface MoodCreateResponse {
    created?: string;
    author?: {
        newcoinTicker?: string;
        youtube?: string;
        powered?: number;
        displayName?: string;
        newcoinAccTx?: string;
        latitude?: number;
        description?: string;
        newcoinPoolId?: string;
        tumblr?: string;
        aspectRatio?: number;
        instagram?: string;
        medium?: string;
        newcoinActivePublicKey?: string;
        soundcloud?: string;
        newcoinPublicKey?: string;
        powering?: number;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        youtubeId?: string;
        id?: string;
        newcoinPoolStake?: number;
        contentType?: string;
        signal?: string;
        longitude?: number;
        newcoinPublisherPublicKey?: string;
        website?: string;
        created?: string;
        spotify?: string;
        facebook?: string;
        facebookId?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        contentUrl?: string;
        discord?: string;
        blurHash?: string;
        consentEmail?: string;
        updated?: string;
        username?: string;
    };
    latitude?: number;
    description?: string;
    aspectRatio?: number;
    title?: string;
    posts?: {
        coverContentUrl?: string;
        moodId?: string;
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        moods?: {
            created?: string;
            author?: {
                newcoinTicker?: string;
                youtube?: string;
                powered?: number;
                displayName?: string;
                newcoinAccTx?: string;
                latitude?: number;
                description?: string;
                newcoinPoolId?: string;
                tumblr?: string;
                aspectRatio?: number;
                instagram?: string;
                medium?: string;
                newcoinActivePublicKey?: string;
                soundcloud?: string;
                newcoinPublicKey?: string;
                powering?: number;
                snapchat?: string;
                apple?: string;
                twitter?: string;
                newcoinOwnerPublicKey?: string;
                tiktok?: string;
                reddit?: string;
                youtubeId?: string;
                id?: string;
                newcoinPoolStake?: number;
                contentType?: string;
                signal?: string;
                longitude?: number;
                newcoinPublisherPublicKey?: string;
                website?: string;
                created?: string;
                spotify?: string;
                facebook?: string;
                facebookId?: string;
                fullName?: string;
                telegram?: string;
                pinterest?: string;
                verifiedSocialIds?: string[];
                newcoinPoolTx?: string;
                license?: string;
                contentUrl?: string;
                discord?: string;
                blurHash?: string;
                consentEmail?: string;
                updated?: string;
                username?: string;
            };
            latitude?: number;
            description?: string;
            aspectRatio?: number;
            title?: string;
            content?: string;
            stakeToAccess?: number;
            tags?: {
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            contentUrl?: string;
            postsCount?: number;
            blurHash?: string;
            id?: string;
            updated?: string;
            contentType?: string;
            longitude?: number;
        }[];
        description?: string;
        aspectRatio?: number;
        title?: string;
        content?: string;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        license?: string;
        contentUrl?: string;
        blurHash?: string;
        newcoinMintTx?: string;
        id?: string;
        embed?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    content?: string;
    stakeToAccess?: number;
    tags?: {
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
        id?: string;
        value?: string;
    }[];
    contentUrl?: string;
    postsCount?: number;
    blurHash?: string;
    id?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
}
export interface MoodReadResponse {
    created?: string;
    author?: {
        newcoinTicker?: string;
        youtube?: string;
        powered?: number;
        displayName?: string;
        newcoinAccTx?: string;
        latitude?: number;
        description?: string;
        newcoinPoolId?: string;
        tumblr?: string;
        aspectRatio?: number;
        instagram?: string;
        medium?: string;
        newcoinActivePublicKey?: string;
        soundcloud?: string;
        newcoinPublicKey?: string;
        powering?: number;
        snapchat?: string;
        apple?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        youtubeId?: string;
        id?: string;
        newcoinPoolStake?: number;
        contentType?: string;
        signal?: string;
        longitude?: number;
        newcoinPublisherPublicKey?: string;
        website?: string;
        created?: string;
        spotify?: string;
        facebook?: string;
        facebookId?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        contentUrl?: string;
        discord?: string;
        blurHash?: string;
        consentEmail?: string;
        updated?: string;
        username?: string;
    };
    latitude?: number;
    description?: string;
    aspectRatio?: number;
    title?: string;
    posts?: {
        coverContentUrl?: string;
        moodId?: string;
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        moods?: {
            created?: string;
            author?: {
                newcoinTicker?: string;
                youtube?: string;
                powered?: number;
                displayName?: string;
                newcoinAccTx?: string;
                latitude?: number;
                description?: string;
                newcoinPoolId?: string;
                tumblr?: string;
                aspectRatio?: number;
                instagram?: string;
                medium?: string;
                newcoinActivePublicKey?: string;
                soundcloud?: string;
                newcoinPublicKey?: string;
                powering?: number;
                snapchat?: string;
                apple?: string;
                twitter?: string;
                newcoinOwnerPublicKey?: string;
                tiktok?: string;
                reddit?: string;
                youtubeId?: string;
                id?: string;
                newcoinPoolStake?: number;
                contentType?: string;
                signal?: string;
                longitude?: number;
                newcoinPublisherPublicKey?: string;
                website?: string;
                created?: string;
                spotify?: string;
                facebook?: string;
                facebookId?: string;
                fullName?: string;
                telegram?: string;
                pinterest?: string;
                verifiedSocialIds?: string[];
                newcoinPoolTx?: string;
                license?: string;
                contentUrl?: string;
                discord?: string;
                blurHash?: string;
                consentEmail?: string;
                updated?: string;
                username?: string;
            };
            latitude?: number;
            description?: string;
            aspectRatio?: number;
            title?: string;
            content?: string;
            stakeToAccess?: number;
            tags?: {
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            contentUrl?: string;
            postsCount?: number;
            blurHash?: string;
            id?: string;
            updated?: string;
            contentType?: string;
            longitude?: number;
        }[];
        description?: string;
        aspectRatio?: number;
        title?: string;
        content?: string;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        license?: string;
        contentUrl?: string;
        blurHash?: string;
        newcoinMintTx?: string;
        id?: string;
        embed?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    content?: string;
    stakeToAccess?: number;
    tags?: {
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
        id?: string;
        value?: string;
    }[];
    contentUrl?: string;
    postsCount?: number;
    blurHash?: string;
    id?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
}
export interface MoodListAttachedPostsResponse {
    value?: {
        coverContentUrl?: string;
        moodId?: string;
        created?: string;
        author?: {
            newcoinTicker?: string;
            youtube?: string;
            powered?: number;
            displayName?: string;
            newcoinAccTx?: string;
            latitude?: number;
            description?: string;
            newcoinPoolId?: string;
            tumblr?: string;
            aspectRatio?: number;
            instagram?: string;
            medium?: string;
            newcoinActivePublicKey?: string;
            soundcloud?: string;
            newcoinPublicKey?: string;
            powering?: number;
            snapchat?: string;
            apple?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            youtubeId?: string;
            id?: string;
            newcoinPoolStake?: number;
            contentType?: string;
            signal?: string;
            longitude?: number;
            newcoinPublisherPublicKey?: string;
            website?: string;
            created?: string;
            spotify?: string;
            facebook?: string;
            facebookId?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            contentUrl?: string;
            discord?: string;
            blurHash?: string;
            consentEmail?: string;
            updated?: string;
            username?: string;
        };
        latitude?: number;
        moods?: {
            created?: string;
            author?: {
                newcoinTicker?: string;
                youtube?: string;
                powered?: number;
                displayName?: string;
                newcoinAccTx?: string;
                latitude?: number;
                description?: string;
                newcoinPoolId?: string;
                tumblr?: string;
                aspectRatio?: number;
                instagram?: string;
                medium?: string;
                newcoinActivePublicKey?: string;
                soundcloud?: string;
                newcoinPublicKey?: string;
                powering?: number;
                snapchat?: string;
                apple?: string;
                twitter?: string;
                newcoinOwnerPublicKey?: string;
                tiktok?: string;
                reddit?: string;
                youtubeId?: string;
                id?: string;
                newcoinPoolStake?: number;
                contentType?: string;
                signal?: string;
                longitude?: number;
                newcoinPublisherPublicKey?: string;
                website?: string;
                created?: string;
                spotify?: string;
                facebook?: string;
                facebookId?: string;
                fullName?: string;
                telegram?: string;
                pinterest?: string;
                verifiedSocialIds?: string[];
                newcoinPoolTx?: string;
                license?: string;
                contentUrl?: string;
                discord?: string;
                blurHash?: string;
                consentEmail?: string;
                updated?: string;
                username?: string;
            };
            latitude?: number;
            description?: string;
            aspectRatio?: number;
            title?: string;
            content?: string;
            stakeToAccess?: number;
            tags?: {
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            contentUrl?: string;
            postsCount?: number;
            blurHash?: string;
            id?: string;
            updated?: string;
            contentType?: string;
            longitude?: number;
        }[];
        description?: string;
        aspectRatio?: number;
        title?: string;
        content?: string;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        license?: string;
        contentUrl?: string;
        blurHash?: string;
        newcoinMintTx?: string;
        id?: string;
        embed?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    }[];
    done?: boolean;
}
export interface MoodCreateRequest {
    latitude?: number;
    description: string;
    title: string;
    longitude?: number;
}
export interface MoodUpdateRequest {
    latitude?: number;
    description?: string;
    id: string;
    title?: string;
    longitude?: number;
}
export interface MoodAttachRequest {
    targetId: string;
    id: string;
}
export interface CreativeSearchResponse {
    hits?: {
        _source?: {
            image?: string;
            meta?: {
                date?: string;
                summary?: string;
                id?: number;
                blog_name?: string;
                tags?: string[];
                short_url?: string;
            };
            aesthetics?: object;
            content?: object;
        };
        _id?: string;
    }[];
}
export interface PaymentStripePaymentIntentCreateRequest {
    items?: {
        productId?: string;
        priceId?: string;
    }[];
    username?: string;
}
export interface PaymentStripeWebhookRequest {
    request?: object;
    livemode?: boolean;
    data?: {
        object?: object;
    };
    created?: number;
    id?: string;
    type?: string;
    api_version?: string;
    pending_webhooks?: number;
    object?: string;
}
export interface PaymentStripePaymentIntentCreateResponse {
    client_secret?: string;
}
/**
 * BcAuthEthRequest Model
 */
export interface BcAuthEthRequest {
    encryptedPayload: string;
    payload: string;
}
/**
 * BcAuthEthResponse Model
 */
export interface BcAuthEthResponse {
    result: boolean;
    signedAddr?: string;
    comment?: string;
    owningAddr?: string;
}
/**
 * BcKeyPairCreateRequest Model
 */
export declare type BcKeyPairCreateRequest = any;
/**
 * BcKeyPairCreateResponse Model
 */
export interface BcKeyPairCreateResponse {
    prv_key: string;
    pub_key: string;
}
/**
 * BcAccCreateRequest Model
 */
export interface BcAccCreateRequest {
    newacc_pub_active_key: string;
    newacc_pub_owner_key: string;
    payer_prv_key: string;
    xfer?: boolean;
    stake_cpu?: string;
    newUser: string;
    stake_ram?: number;
    payer: string;
    stake_net?: string;
}
/**
 * BcCollectionCreateRequest Model
 */
export interface BcCollectionCreateRequest {
    mkt_fee?: number;
    template_name: string;
    template_fields: {
        name: string;
        type: string;
    }[];
    xferable?: boolean;
    max_supply?: number;
    allow_notify?: boolean;
    burnable?: boolean;
    schema_name: string;
    schema_fields: {
        name: string;
        type: string;
    }[];
    user: string;
    user_prv_active_key: string;
    collection_name: string;
}
/**
 * BcPoolCreateRequest Model
 */
export interface BcPoolCreateRequest {
    owner: string;
    owner_prv_active_key?: string;
    payer?: string;
}
/**
 * BcStakeMainDAORequest Model
 */
export interface BcStakeMainDAORequest {
    payer_prv_key: string;
    amt: string;
    payer: string;
}
/**
 * BcStakePoolRequest Model
 */
export interface BcStakePoolRequest {
    owner: string;
    payer_prv_key: string;
    amt: string;
    payer: string;
}
/**
 * BcMintAssetRequest Model
 */
export interface BcMintAssetRequest {
    immutable_data?: {
        value: string[];
        key: string;
    }[];
    tpl_name?: string;
    payer_prv_key: string;
    creator: string;
    sch_name?: string;
    mutable_data?: {
        value: string[];
        key: string;
    }[];
    col_name?: string;
    payer: string;
    payer_public_key: string;
}
/**
 * BcTxResponse Model
 */
export interface BcTxResponse {
    TxID_createTpl?: string;
    TxID_createPool?: string;
    TxID_createAcc?: string;
    TxID_createCol?: string;
    TxID_createSch?: string;
    TxID_stakeToPool?: string;
    TxID_mintAsset?: string;
}
/**
 * BcGetAccountInfo Model
 */
export interface BcGetAccountInfo {
    owner: string;
    contract?: string;
}
/**
 * BcGetPoolInfo Model
 */
export interface BcGetPoolInfo {
    owner: string;
}
/**
 * BcGetInfoResp Model
 */
export declare type BcGetInfoResp = any;
export interface BcCreateDaoRequest {
    descr?: string;
    authpr_prv_key?: string;
    author?: string;
    token?: string;
}
export interface BcCreateDaoResponse {
    TxID_createDao?: string;
    dao_id?: string;
}
export interface BcCreateDaoProposal {
    summary?: string;
    vote_start?: string;
    dao_id?: string;
    dao_owner?: string;
    vote_end?: string;
    title?: string;
    url?: string;
}
export interface BcCreateWhitelistDaoProposal {
    quantity?: string;
    proposer?: string;
    vote_start?: string;
    dao_id?: string;
    dao_owner?: string;
    vote_end?: string;
    user?: string;
    proposer_prv_key?: string;
}
export interface BcApproveDaoProposalRequest {
    approver?: string;
    proposal_author?: string;
    proposal_id?: string;
    dao_id?: number;
    dao_owner?: string;
    approver_prv_key?: string;
}
export declare type BcListDaoWhitelistResponse = any;
export interface BcListDaoProposalsResponse {
    more?: object;
    dao_id?: string;
    next_key?: string;
    rows?: {
        summary?: string;
        proposer?: string;
        vote_start?: string;
        more?: object;
        next_key?: string;
        vote_end?: string;
        id?: number;
        title?: string;
        vote_no?: {
            quantity?: string;
            contract?: string;
        };
        url?: string;
        vote_yes?: {
            quantity?: string;
            contract?: string;
        };
        status?: string;
    }[];
}
export interface BcDaoProposalVoteRequest {
    proposal_type?: string;
    quantity: string;
    proposal_id: string;
    dao_id?: string;
    dao_owner?: string;
    voter: string;
    option: string;
}
export interface BcDaoProposalExecuteRequest {
    proposal_author?: string;
    proposal_id?: number;
    dao_id?: string;
    dao_owner?: string;
    exec?: string;
    exec_prv_key?: string;
}
export interface BcDaoProposalExecuteResponse {
    TxID_executeDaoProposal?: string;
}
export interface BcDaoWidthdrawVoteDepositRequest {
    vote_id?: string;
}
export interface BcDaoWidthdrawVoteDepositResponse {
    TxID_WithdrawVoteDeposit?: string;
}
export interface BcDaoProposalVoteResponse {
    daoId?: string;
    more?: object;
    next_key?: string;
    rows?: {
        proposal_type?: string;
        quantity?: {
            quantity?: string;
            contract?: string;
        };
        proposal_id?: number;
        dao_id?: number;
        id?: string;
        lock_end_date?: string;
    }[];
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private encodeQueryParam;
    private addQueryParam;
    private addArrayQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title newlife-creator-api-eu-dev
 * @version 2022-08-15T13:39:44Z
 * @baseUrl https://api-eu-dev.newlife.io/creator
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    auth: {
        /**
         * No description
         *
         * @name CallbackPathList
         * @request GET:/auth/callback/{path+}
         */
        callbackPathList: (path: string, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth
         * @request OPTIONS:/auth/callback/{path+}
         */
        optionsAuth: (path: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ProviderPathList
         * @request GET:/auth/provider/{path+}
         */
        providerPathList: (path: string, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth2
         * @request OPTIONS:/auth/provider/{path+}
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth2: (path: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    folder: {
        /**
         * No description
         *
         * @name FolderList
         * @request GET:/folder
         * @secure
         */
        folderList: (query?: {
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsFolder
         * @request OPTIONS:/folder
         */
        optionsFolder: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    info: {
        /**
         * No description
         *
         * @name InfoList
         * @request GET:/info
         */
        infoList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsInfo
         * @request OPTIONS:/info
         */
        optionsInfo: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    infoAuth: {
        /**
         * No description
         *
         * @name InfoAuthList
         * @request GET:/info-auth
         * @secure
         */
        infoAuthList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsInfoAuth
         * @request OPTIONS:/info-auth
         */
        optionsInfoAuth: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    mood: {
        /**
         * No description
         *
         * @name MoodList
         * @request GET:/mood
         * @secure
         */
        moodList: (query?: {
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name MoodCreate
         * @request POST:/mood
         * @secure
         */
        moodCreate: (MoodCreateRequest: MoodCreateRequest, params?: RequestParams) => Promise<HttpResponse<MoodCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name MoodUpdate
         * @request PUT:/mood
         * @secure
         */
        moodUpdate: (MoodUpdateRequest: MoodUpdateRequest, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood
         * @request OPTIONS:/mood
         */
        optionsMood: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AttachPostUpdate
         * @request PUT:/mood/attach/post
         * @secure
         */
        attachPostUpdate: (MoodAttachRequest: MoodAttachRequest, params?: RequestParams) => Promise<HttpResponse<PostReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood2
         * @request OPTIONS:/mood/attach/post
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTopList
         * @request GET:/mood/list/top
         * @secure
         */
        listTopList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood3
         * @request OPTIONS:/mood/list/top
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name PostsList
         * @request GET:/mood/posts
         * @secure
         */
        postsList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodListAttachedPostsResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood4
         * @request OPTIONS:/mood/posts
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RateCreate
         * @request POST:/mood/rate
         * @secure
         */
        rateCreate: (RatingUpdateRequest: RatingUpdateRequest, params?: RequestParams) => Promise<HttpResponse<RatingUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood5
         * @request OPTIONS:/mood/rate
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UploadCreate
         * @request POST:/mood/upload
         * @secure
         */
        uploadCreate: (UploadRequestGeneric: UploadRequestGeneric, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood6
         * @request OPTIONS:/mood/upload
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    newcoin: {
        /**
         * No description
         *
         * @name BcaccopenCreate
         * @request POST:/newcoin/bcaccopen
         * @secure
         */
        bcaccopenCreate: (BcAccCreateRequest: BcAccCreateRequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin
         * @request OPTIONS:/newcoin/bcaccopen
         */
        optionsNewcoin: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcauthethCreate
         * @request POST:/newcoin/bcautheth
         */
        bcauthethCreate: (BcAuthEthRequest: BcAuthEthRequest, params?: RequestParams) => Promise<HttpResponse<BcAuthEthResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin2
         * @request OPTIONS:/newcoin/bcautheth
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BccolcreateCreate
         * @request POST:/newcoin/bccolcreate
         * @secure
         */
        bccolcreateCreate: (BcCollectionCreateRequest: BcCollectionCreateRequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin3
         * @request OPTIONS:/newcoin/bccolcreate
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcgetaccCreate
         * @request POST:/newcoin/bcgetacc
         * @secure
         */
        bcgetaccCreate: (BcGetAccountInfo: BcGetAccountInfo, params?: RequestParams) => Promise<HttpResponse<any, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin4
         * @request OPTIONS:/newcoin/bcgetacc
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcgetpoolCreate
         * @request POST:/newcoin/bcgetpool
         * @secure
         */
        bcgetpoolCreate: (BcGetPoolInfo: BcGetPoolInfo, params?: RequestParams) => Promise<HttpResponse<any, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin5
         * @request OPTIONS:/newcoin/bcgetpool
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BckeypairCreate
         * @request POST:/newcoin/bckeypair
         * @secure
         */
        bckeypairCreate: (BcKeyPairCreateRequest: any, params?: RequestParams) => Promise<HttpResponse<BcKeyPairCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin6
         * @request OPTIONS:/newcoin/bckeypair
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcmaindaodldunstakeCreate
         * @request POST:/newcoin/bcmaindaodldunstake
         * @secure
         */
        bcmaindaodldunstakeCreate: (BcStakeMainDAORequest: BcStakeMainDAORequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin7
         * @request OPTIONS:/newcoin/bcmaindaodldunstake
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin7: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcmaindaoinstunstakeCreate
         * @request POST:/newcoin/bcmaindaoinstunstake
         * @secure
         */
        bcmaindaoinstunstakeCreate: (BcStakePoolRequest: BcStakePoolRequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin8
         * @request OPTIONS:/newcoin/bcmaindaoinstunstake
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin8: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcmaindaostakeCreate
         * @request POST:/newcoin/bcmaindaostake
         * @secure
         */
        bcmaindaostakeCreate: (BcStakeMainDAORequest: BcStakeMainDAORequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin9
         * @request OPTIONS:/newcoin/bcmaindaostake
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin9: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcmintassetCreate
         * @request POST:/newcoin/bcmintasset
         * @secure
         */
        bcmintassetCreate: (BcMintAssetRequest: BcMintAssetRequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin10
         * @request OPTIONS:/newcoin/bcmintasset
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin10: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcpoolcreateCreate
         * @request POST:/newcoin/bcpoolcreate
         * @secure
         */
        bcpoolcreateCreate: (BcPoolCreateRequest: BcPoolCreateRequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin11
         * @request OPTIONS:/newcoin/bcpoolcreate
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin11: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BcpoolstakeCreate
         * @request POST:/newcoin/bcpoolstake
         * @secure
         */
        bcpoolstakeCreate: (BcStakePoolRequest: BcStakePoolRequest, params?: RequestParams) => Promise<HttpResponse<BcTxResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin12
         * @request OPTIONS:/newcoin/bcpoolstake
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin12: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoCreateCreate
         * @request POST:/newcoin/dao/create
         * @secure
         */
        daoCreateCreate: (BcCreateDaoRequest: BcCreateDaoRequest, params?: RequestParams) => Promise<HttpResponse<BcCreateDaoResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin13
         * @request OPTIONS:/newcoin/dao/create
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin13: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalCreate
         * @request POST:/newcoin/dao/proposal
         * @secure
         */
        daoProposalCreate: (BcCreateDaoProposal: BcCreateDaoProposal, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin14
         * @request OPTIONS:/newcoin/dao/proposal
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin14: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalWhitelistCreate
         * @request POST:/newcoin/dao/proposal-whitelist
         * @secure
         */
        daoProposalWhitelistCreate: (BcCreateWhitelistDaoProposal: BcCreateWhitelistDaoProposal, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin15
         * @request OPTIONS:/newcoin/dao/proposal-whitelist
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin15: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalWhitelistApproveCreate
         * @request POST:/newcoin/dao/proposal-whitelist/approve
         * @secure
         */
        daoProposalWhitelistApproveCreate: (BcApproveDaoProposalRequest: BcApproveDaoProposalRequest, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin16
         * @request OPTIONS:/newcoin/dao/proposal-whitelist/approve
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin16: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalWhitelistExecuteCreate
         * @request POST:/newcoin/dao/proposal-whitelist/execute
         * @secure
         */
        daoProposalWhitelistExecuteCreate: (BcDaoProposalExecuteRequest: BcDaoProposalExecuteRequest, params?: RequestParams) => Promise<HttpResponse<BcDaoProposalExecuteResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin17
         * @request OPTIONS:/newcoin/dao/proposal-whitelist/execute
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin17: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalWhitelistListList
         * @request GET:/newcoin/dao/proposal-whitelist/list
         * @secure
         */
        daoProposalWhitelistListList: (query?: {
            reverse?: string | undefined;
            proposalAuthor?: string | undefined;
            dao_owner?: string | undefined;
            dao_id?: string | undefined;
            limit?: string | undefined;
            lower_bound?: string | undefined;
            upper_bound?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<BcListDaoProposalsResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin18
         * @request OPTIONS:/newcoin/dao/proposal-whitelist/list
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin18: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalApproveCreate
         * @request POST:/newcoin/dao/proposal/approve
         * @secure
         */
        daoProposalApproveCreate: (BcApproveDaoProposalRequest: BcApproveDaoProposalRequest, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin19
         * @request OPTIONS:/newcoin/dao/proposal/approve
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin19: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalExecuteCreate
         * @request POST:/newcoin/dao/proposal/execute
         * @secure
         */
        daoProposalExecuteCreate: (BcDaoProposalExecuteRequest: BcDaoProposalExecuteRequest, params?: RequestParams) => Promise<HttpResponse<BcDaoProposalExecuteResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin20
         * @request OPTIONS:/newcoin/dao/proposal/execute
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin20: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalListList
         * @request GET:/newcoin/dao/proposal/list
         * @secure
         */
        daoProposalListList: (query?: {
            reverse?: string | undefined;
            proposalAuthor?: string | undefined;
            dao_owner?: string | undefined;
            dao_id?: string | undefined;
            limit?: string | undefined;
            lower_bound?: string | undefined;
            upper_bound?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<BcListDaoProposalsResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin21
         * @request OPTIONS:/newcoin/dao/proposal/list
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin21: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalVoteCreate
         * @request POST:/newcoin/dao/proposal/vote
         * @secure
         */
        daoProposalVoteCreate: (BcDaoProposalVoteRequest: BcDaoProposalVoteRequest, params?: RequestParams) => Promise<HttpResponse<BcListDaoProposalsResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin22
         * @request OPTIONS:/newcoin/dao/proposal/vote
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin22: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoProposalVotesList
         * @request GET:/newcoin/dao/proposal/votes
         * @secure
         */
        daoProposalVotesList: (query?: {
            reverse?: string | undefined;
            limit?: string | undefined;
            upper_bound?: string | undefined;
            voter?: string | undefined;
            lower_bound?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<BcDaoProposalVoteResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin23
         * @request OPTIONS:/newcoin/dao/proposal/votes
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin23: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoWhitelistList
         * @request GET:/newcoin/dao/whitelist
         * @secure
         */
        daoWhitelistList: (query?: {
            reverse?: string | undefined;
            dao_owner?: string | undefined;
            dao_id?: string | undefined;
            limit?: string | undefined;
            upper_bound?: string | undefined;
            lower_bound?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<any, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin24
         * @request OPTIONS:/newcoin/dao/whitelist
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin24: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name DaoWithdrawVoteDepositCreate
         * @request POST:/newcoin/dao/withdrawVoteDeposit
         * @secure
         */
        daoWithdrawVoteDepositCreate: (BcDaoWidthdrawVoteDepositRequest: BcDaoWidthdrawVoteDepositRequest, params?: RequestParams) => Promise<HttpResponse<BcDaoWidthdrawVoteDepositResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsNewcoin25
         * @request OPTIONS:/newcoin/dao/withdrawVoteDeposit
         * @originalName optionsNewcoin
         * @duplicate
         */
        optionsNewcoin25: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    payment: {
        /**
         * No description
         *
         * @name StripeIntentCreate
         * @request POST:/payment/stripe/intent
         * @secure
         */
        stripeIntentCreate: (PaymentStripePaymentIntentCreateRequest: PaymentStripePaymentIntentCreateRequest, params?: RequestParams) => Promise<HttpResponse<PaymentStripePaymentIntentCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPayment
         * @request OPTIONS:/payment/stripe/intent
         */
        optionsPayment: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StripeSubscriptionPaymentCreate
         * @request POST:/payment/stripe/subscription/payment
         * @secure
         */
        stripeSubscriptionPaymentCreate: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPayment2
         * @request OPTIONS:/payment/stripe/subscription/payment
         * @originalName optionsPayment
         * @duplicate
         */
        optionsPayment2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StripeWebhookCreate
         * @request POST:/payment/stripe/webhook
         */
        stripeWebhookCreate: (PaymentStripeWebhookRequest: PaymentStripeWebhookRequest, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPayment3
         * @request OPTIONS:/payment/stripe/webhook
         * @originalName optionsPayment
         * @duplicate
         */
        optionsPayment3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    post: {
        /**
         * No description
         *
         * @name PostList
         * @request GET:/post
         * @secure
         */
        postList: (query?: {
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name PostCreate
         * @request POST:/post
         * @secure
         */
        postCreate: (PostCreateRequest: PostCreateRequest, params?: RequestParams) => Promise<HttpResponse<PostCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name PostUpdate
         * @request PUT:/post
         * @secure
         */
        postUpdate: (PostUpdateRequest: PostUpdateRequest, params?: RequestParams) => Promise<HttpResponse<PostReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost
         * @request OPTIONS:/post
         */
        optionsPost: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListSearchList
         * @request GET:/post/list/search
         * @secure
         */
        listSearchList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
            q?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost2
         * @request OPTIONS:/post/list/search
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTagsSearchList
         * @request GET:/post/list/tags-search
         * @secure
         */
        listTagsSearchList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
            q?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostTagsSearchPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost3
         * @request OPTIONS:/post/list/tags-search
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTopList
         * @request GET:/post/list/top
         * @secure
         */
        listTopList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost4
         * @request OPTIONS:/post/list/top
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RateCreate
         * @request POST:/post/rate
         * @secure
         */
        rateCreate: (RatingUpdateRequest: RatingUpdateRequest, params?: RequestParams) => Promise<HttpResponse<RatingUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost5
         * @request OPTIONS:/post/rate
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ReportCreate
         * @request POST:/post/report
         * @secure
         */
        reportCreate: (ReportUpdateRequest: ReportUpdateRequest, params?: RequestParams) => Promise<HttpResponse<ReportUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost6
         * @request OPTIONS:/post/report
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UploadCreate
         * @request POST:/post/upload
         * @secure
         */
        uploadCreate: (UploadRequestGeneric: UploadRequestGeneric, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost7
         * @request OPTIONS:/post/upload
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost7: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UtilsRemoteMetaProxyList
         * @request GET:/post/utils/remote-meta-proxy
         * @secure
         */
        utilsRemoteMetaProxyList: (query?: {
            url?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostRemoteMetaProxyResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost8
         * @request OPTIONS:/post/utils/remote-meta-proxy
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost8: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    search: {
        /**
         * No description
         *
         * @name CreativeList
         * @request GET:/search/creative
         * @secure
         */
        creativeList: (query?: {
            aesthetics?: string | undefined;
            tags?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<CreativeSearchResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsSearch
         * @request OPTIONS:/search/creative
         */
        optionsSearch: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    upload: {
        /**
         * No description
         *
         * @name NodeCreate
         * @request POST:/upload/node
         * @secure
         */
        nodeCreate: (UploadRequest: UploadRequest, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUpload
         * @request OPTIONS:/upload/node
         */
        optionsUpload: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    user: {
        /**
         * No description
         *
         * @name UserList
         * @request GET:/user
         * @secure
         */
        userList: (query?: {
            username?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name UserCreate
         * @request POST:/user
         * @secure
         */
        userCreate: (UserCreateRequest: UserCreateRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name UserUpdate
         * @request PUT:/user
         * @secure
         */
        userUpdate: (UserUpdateRequest: UserUpdateRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name UserDelete
         * @request DELETE:/user
         * @secure
         */
        userDelete: (UserDeleteRequest: UserDeleteRequest, params?: RequestParams) => Promise<HttpResponse<OkResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser
         * @request OPTIONS:/user
         */
        optionsUser: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ActivityStreamList
         * @request GET:/user/activityStream
         * @secure
         */
        activityStreamList: (query?: {
            after?: string | undefined;
            limit?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<object, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser2
         * @request OPTIONS:/user/activityStream
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AvailabilityList
         * @request GET:/user/availability
         */
        availabilityList: (query?: {
            username?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserAvailabilityResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser3
         * @request OPTIONS:/user/availability
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name CurrentList
         * @request GET:/user/current
         * @secure
         */
        currentList: (params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser4
         * @request OPTIONS:/user/current
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InviteCreate
         * @request POST:/user/invite
         * @secure
         */
        inviteCreate: (UserInviteRequest: UserInviteRequest, params?: RequestParams) => Promise<HttpResponse<OkResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser5
         * @request OPTIONS:/user/invite
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InviteHashList
         * @request GET:/user/invite/hash
         */
        inviteHashList: (query?: {
            hash?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserInvitationReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser6
         * @request OPTIONS:/user/invite/hash
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InviteesList
         * @request GET:/user/invitees
         * @secure
         */
        inviteesList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserInvitationPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser7
         * @request OPTIONS:/user/invitees
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser7: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InvitorList
         * @request GET:/user/invitor
         * @secure
         */
        invitorList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserInvitationPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser8
         * @request OPTIONS:/user/invitor
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser8: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListSearchList
         * @request GET:/user/list/search
         * @secure
         */
        listSearchList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
            q?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser9
         * @request OPTIONS:/user/list/search
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser9: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTopList
         * @request GET:/user/list/top
         * @secure
         */
        listTopList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser10
         * @request OPTIONS:/user/list/top
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser10: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name MoodsList
         * @request GET:/user/moods
         * @secure
         */
        moodsList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser11
         * @request OPTIONS:/user/moods
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser11: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name PreregisterCreate
         * @request POST:/user/preregister
         * @secure
         */
        preregisterCreate: (UserPreRegisterRequest: UserPreRegisterRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser12
         * @request OPTIONS:/user/preregister
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser12: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RatedInList
         * @request GET:/user/rated/in
         * @secure
         */
        ratedInList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PagedRatedResponseUser, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser13
         * @request OPTIONS:/user/rated/in
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser13: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RatedOutPostsList
         * @request GET:/user/rated/out/posts
         * @secure
         */
        ratedOutPostsList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PagedRatedResponsePost, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser14
         * @request OPTIONS:/user/rated/out/posts
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser14: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RatedOutUsersList
         * @request GET:/user/rated/out/users
         * @secure
         */
        ratedOutUsersList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PagedRatedResponseUser, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser15
         * @request OPTIONS:/user/rated/out/users
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser15: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StakeCreate
         * @request POST:/user/stake
         * @secure
         */
        stakeCreate: (UserStakeRequest: UserStakeRequest, params?: RequestParams) => Promise<HttpResponse<object, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser16
         * @request OPTIONS:/user/stake
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser16: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SyncContactsCreate
         * @request POST:/user/syncContacts
         * @secure
         */
        syncContactsCreate: (SyncContactsRequest: SyncContactsRequest, params?: RequestParams) => Promise<HttpResponse<any, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser17
         * @request OPTIONS:/user/syncContacts
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser17: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name TransferCreate
         * @request POST:/user/transfer
         * @secure
         */
        transferCreate: (UserTransferRequest: UserTransferRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser18
         * @request OPTIONS:/user/transfer
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser18: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UploadCreate
         * @request POST:/user/upload
         * @secure
         */
        uploadCreate: (UserUploadRequest: UserUploadRequest, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser19
         * @request OPTIONS:/user/upload
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser19: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UserRateCreate
         * @request POST:/user/userRate
         * @secure
         */
        userRateCreate: (RatingUpdateRequest: RatingUpdateRequest, params?: RequestParams) => Promise<HttpResponse<RatingUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser20
         * @request OPTIONS:/user/userRate
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser20: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
}
export {};
