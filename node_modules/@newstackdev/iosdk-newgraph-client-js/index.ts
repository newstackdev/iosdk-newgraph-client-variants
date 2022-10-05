/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type AnyResponse = object;

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
          _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
    phones?: { label?: string; value?: string }[];
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
    emails?: { label?: string; value?: string }[];
    androidAccountType?: string;
    familyName?: string;
    middleName?: string;
    company?: string;
    androidAccountTypeRaw?: string;
  }[];
}

export type SyncContactsResponse = any;

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
    rating?: { created?: string; value?: number; updated?: string };
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
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
    rating?: { created?: string; value?: number; updated?: string };
    description?: string;
    aspectRatio?: number;
    title?: string;
    content?: string;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
  value?: { created?: string; tag?: string }[];
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
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
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
      meta?: { date?: string; summary?: string; id?: number; blog_name?: string; tags?: string[]; short_url?: string };
      aesthetics?: object;
      content?: object;
    };
    _id?: string;
  }[];
}

export interface PaymentStripePaymentIntentCreateRequest {
  items?: { productId?: string; priceId?: string }[];
  username?: string;
}

export interface PaymentStripeWebhookRequest {
  request?: object;
  livemode?: boolean;
  data?: { object?: object };
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
export type BcKeyPairCreateRequest = any;

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
  template_fields: { name: string; type: string }[];
  xferable?: boolean;
  max_supply?: number;
  allow_notify?: boolean;
  burnable?: boolean;
  schema_name: string;
  schema_fields: { name: string; type: string }[];
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
  immutable_data?: { value: string[]; key: string }[];
  tpl_name?: string;
  payer_prv_key: string;
  creator: string;
  sch_name?: string;
  mutable_data?: { value: string[]; key: string }[];
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
export type BcGetInfoResp = any;

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

export type BcListDaoWhitelistResponse = any;

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
    vote_no?: { quantity?: string; contract?: string };
    url?: string;
    vote_yes?: { quantity?: string; contract?: string };
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
    quantity?: { quantity?: string; contract?: string };
    proposal_id?: number;
    dao_id?: number;
    id?: string;
    lock_end_date?: string;
  }[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

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

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api-eu-dev.newlife.io/creator";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title newlife-creator-api-eu-dev
 * @version 2022-08-15T13:39:44Z
 * @baseUrl https://api-eu-dev.newlife.io/creator
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @name CallbackPathList
     * @request GET:/auth/callback/{path+}
     */
    callbackPathList: (path: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/auth/callback/{path+}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth
     * @request OPTIONS:/auth/callback/{path+}
     */
    optionsAuth: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/callback/{path+}`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ProviderPathList
     * @request GET:/auth/provider/{path+}
     */
    providerPathList: (path: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/auth/provider/{path+}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth2
     * @request OPTIONS:/auth/provider/{path+}
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth2: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/provider/{path+}`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  folder = {
    /**
     * No description
     *
     * @name FolderList
     * @request GET:/folder
     * @secure
     */
    folderList: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/folder`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsFolder
     * @request OPTIONS:/folder
     */
    optionsFolder: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/folder`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  info = {
    /**
     * No description
     *
     * @name InfoList
     * @request GET:/info
     */
    infoList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/info`,
        method: "GET",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsInfo
     * @request OPTIONS:/info
     */
    optionsInfo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/info`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  infoAuth = {
    /**
     * No description
     *
     * @name InfoAuthList
     * @request GET:/info-auth
     * @secure
     */
    infoAuthList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/info-auth`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsInfoAuth
     * @request OPTIONS:/info-auth
     */
    optionsInfoAuth: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/info-auth`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  mood = {
    /**
     * No description
     *
     * @name MoodList
     * @request GET:/mood
     * @secure
     */
    moodList: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/mood`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MoodCreate
     * @request POST:/mood
     * @secure
     */
    moodCreate: (MoodCreateRequest: MoodCreateRequest, params: RequestParams = {}) =>
      this.request<MoodCreateResponse, ErrorResponse>({
        path: `/mood`,
        method: "POST",
        body: MoodCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MoodUpdate
     * @request PUT:/mood
     * @secure
     */
    moodUpdate: (MoodUpdateRequest: MoodUpdateRequest, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/mood`,
        method: "PUT",
        body: MoodUpdateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood
     * @request OPTIONS:/mood
     */
    optionsMood: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name AttachPostUpdate
     * @request PUT:/mood/attach/post
     * @secure
     */
    attachPostUpdate: (MoodAttachRequest: MoodAttachRequest, params: RequestParams = {}) =>
      this.request<PostReadResponse, ErrorResponse>({
        path: `/mood/attach/post`,
        method: "PUT",
        body: MoodAttachRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood2
     * @request OPTIONS:/mood/attach/post
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/attach/post`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTopList
     * @request GET:/mood/list/top
     * @secure
     */
    listTopList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<MoodPagedListReadPublicResponse, ErrorResponse>({
        path: `/mood/list/top`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood3
     * @request OPTIONS:/mood/list/top
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/list/top`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name PostsList
     * @request GET:/mood/posts
     * @secure
     */
    postsList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<MoodListAttachedPostsResponse, ErrorResponse>({
        path: `/mood/posts`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood4
     * @request OPTIONS:/mood/posts
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/posts`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name RateCreate
     * @request POST:/mood/rate
     * @secure
     */
    rateCreate: (RatingUpdateRequest: RatingUpdateRequest, params: RequestParams = {}) =>
      this.request<RatingUpdateResponse, ErrorResponse>({
        path: `/mood/rate`,
        method: "POST",
        body: RatingUpdateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood5
     * @request OPTIONS:/mood/rate
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/rate`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UploadCreate
     * @request POST:/mood/upload
     * @secure
     */
    uploadCreate: (UploadRequestGeneric: UploadRequestGeneric, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/mood/upload`,
        method: "POST",
        body: UploadRequestGeneric,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood6
     * @request OPTIONS:/mood/upload
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/upload`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  newcoin = {
    /**
     * No description
     *
     * @name BcaccopenCreate
     * @request POST:/newcoin/bcaccopen
     * @secure
     */
    bcaccopenCreate: (BcAccCreateRequest: BcAccCreateRequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bcaccopen`,
        method: "POST",
        body: BcAccCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin
     * @request OPTIONS:/newcoin/bcaccopen
     */
    optionsNewcoin: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcaccopen`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcauthethCreate
     * @request POST:/newcoin/bcautheth
     */
    bcauthethCreate: (BcAuthEthRequest: BcAuthEthRequest, params: RequestParams = {}) =>
      this.request<BcAuthEthResponse, ErrorResponse>({
        path: `/newcoin/bcautheth`,
        method: "POST",
        body: BcAuthEthRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin2
     * @request OPTIONS:/newcoin/bcautheth
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcautheth`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BccolcreateCreate
     * @request POST:/newcoin/bccolcreate
     * @secure
     */
    bccolcreateCreate: (BcCollectionCreateRequest: BcCollectionCreateRequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bccolcreate`,
        method: "POST",
        body: BcCollectionCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin3
     * @request OPTIONS:/newcoin/bccolcreate
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bccolcreate`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcgetaccCreate
     * @request POST:/newcoin/bcgetacc
     * @secure
     */
    bcgetaccCreate: (BcGetAccountInfo: BcGetAccountInfo, params: RequestParams = {}) =>
      this.request<BcGetInfoResp, ErrorResponse>({
        path: `/newcoin/bcgetacc`,
        method: "POST",
        body: BcGetAccountInfo,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin4
     * @request OPTIONS:/newcoin/bcgetacc
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcgetacc`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcgetpoolCreate
     * @request POST:/newcoin/bcgetpool
     * @secure
     */
    bcgetpoolCreate: (BcGetPoolInfo: BcGetPoolInfo, params: RequestParams = {}) =>
      this.request<BcGetInfoResp, ErrorResponse>({
        path: `/newcoin/bcgetpool`,
        method: "POST",
        body: BcGetPoolInfo,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin5
     * @request OPTIONS:/newcoin/bcgetpool
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcgetpool`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BckeypairCreate
     * @request POST:/newcoin/bckeypair
     * @secure
     */
    bckeypairCreate: (BcKeyPairCreateRequest: BcKeyPairCreateRequest, params: RequestParams = {}) =>
      this.request<BcKeyPairCreateResponse, ErrorResponse>({
        path: `/newcoin/bckeypair`,
        method: "POST",
        body: BcKeyPairCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin6
     * @request OPTIONS:/newcoin/bckeypair
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bckeypair`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcmaindaodldunstakeCreate
     * @request POST:/newcoin/bcmaindaodldunstake
     * @secure
     */
    bcmaindaodldunstakeCreate: (BcStakeMainDAORequest: BcStakeMainDAORequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bcmaindaodldunstake`,
        method: "POST",
        body: BcStakeMainDAORequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin7
     * @request OPTIONS:/newcoin/bcmaindaodldunstake
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin7: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcmaindaodldunstake`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcmaindaoinstunstakeCreate
     * @request POST:/newcoin/bcmaindaoinstunstake
     * @secure
     */
    bcmaindaoinstunstakeCreate: (BcStakePoolRequest: BcStakePoolRequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bcmaindaoinstunstake`,
        method: "POST",
        body: BcStakePoolRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin8
     * @request OPTIONS:/newcoin/bcmaindaoinstunstake
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin8: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcmaindaoinstunstake`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcmaindaostakeCreate
     * @request POST:/newcoin/bcmaindaostake
     * @secure
     */
    bcmaindaostakeCreate: (BcStakeMainDAORequest: BcStakeMainDAORequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bcmaindaostake`,
        method: "POST",
        body: BcStakeMainDAORequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin9
     * @request OPTIONS:/newcoin/bcmaindaostake
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin9: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcmaindaostake`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcmintassetCreate
     * @request POST:/newcoin/bcmintasset
     * @secure
     */
    bcmintassetCreate: (BcMintAssetRequest: BcMintAssetRequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bcmintasset`,
        method: "POST",
        body: BcMintAssetRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin10
     * @request OPTIONS:/newcoin/bcmintasset
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin10: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcmintasset`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcpoolcreateCreate
     * @request POST:/newcoin/bcpoolcreate
     * @secure
     */
    bcpoolcreateCreate: (BcPoolCreateRequest: BcPoolCreateRequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bcpoolcreate`,
        method: "POST",
        body: BcPoolCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin11
     * @request OPTIONS:/newcoin/bcpoolcreate
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin11: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcpoolcreate`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name BcpoolstakeCreate
     * @request POST:/newcoin/bcpoolstake
     * @secure
     */
    bcpoolstakeCreate: (BcStakePoolRequest: BcStakePoolRequest, params: RequestParams = {}) =>
      this.request<BcTxResponse, ErrorResponse>({
        path: `/newcoin/bcpoolstake`,
        method: "POST",
        body: BcStakePoolRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin12
     * @request OPTIONS:/newcoin/bcpoolstake
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin12: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/bcpoolstake`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoCreateCreate
     * @request POST:/newcoin/dao/create
     * @secure
     */
    daoCreateCreate: (BcCreateDaoRequest: BcCreateDaoRequest, params: RequestParams = {}) =>
      this.request<BcCreateDaoResponse, ErrorResponse>({
        path: `/newcoin/dao/create`,
        method: "POST",
        body: BcCreateDaoRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin13
     * @request OPTIONS:/newcoin/dao/create
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin13: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/create`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalCreate
     * @request POST:/newcoin/dao/proposal
     * @secure
     */
    daoProposalCreate: (BcCreateDaoProposal: BcCreateDaoProposal, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/newcoin/dao/proposal`,
        method: "POST",
        body: BcCreateDaoProposal,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin14
     * @request OPTIONS:/newcoin/dao/proposal
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin14: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalWhitelistCreate
     * @request POST:/newcoin/dao/proposal-whitelist
     * @secure
     */
    daoProposalWhitelistCreate: (
      BcCreateWhitelistDaoProposal: BcCreateWhitelistDaoProposal,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/newcoin/dao/proposal-whitelist`,
        method: "POST",
        body: BcCreateWhitelistDaoProposal,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin15
     * @request OPTIONS:/newcoin/dao/proposal-whitelist
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin15: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal-whitelist`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalWhitelistApproveCreate
     * @request POST:/newcoin/dao/proposal-whitelist/approve
     * @secure
     */
    daoProposalWhitelistApproveCreate: (
      BcApproveDaoProposalRequest: BcApproveDaoProposalRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/newcoin/dao/proposal-whitelist/approve`,
        method: "POST",
        body: BcApproveDaoProposalRequest,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin16
     * @request OPTIONS:/newcoin/dao/proposal-whitelist/approve
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin16: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal-whitelist/approve`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalWhitelistExecuteCreate
     * @request POST:/newcoin/dao/proposal-whitelist/execute
     * @secure
     */
    daoProposalWhitelistExecuteCreate: (
      BcDaoProposalExecuteRequest: BcDaoProposalExecuteRequest,
      params: RequestParams = {},
    ) =>
      this.request<BcDaoProposalExecuteResponse, ErrorResponse>({
        path: `/newcoin/dao/proposal-whitelist/execute`,
        method: "POST",
        body: BcDaoProposalExecuteRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin17
     * @request OPTIONS:/newcoin/dao/proposal-whitelist/execute
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin17: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal-whitelist/execute`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalWhitelistListList
     * @request GET:/newcoin/dao/proposal-whitelist/list
     * @secure
     */
    daoProposalWhitelistListList: (
      query?: {
        reverse?: string;
        proposalAuthor?: string;
        dao_owner?: string;
        dao_id?: string;
        limit?: string;
        lower_bound?: string;
        upper_bound?: string;
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BcListDaoProposalsResponse, ErrorResponse>({
        path: `/newcoin/dao/proposal-whitelist/list`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin18
     * @request OPTIONS:/newcoin/dao/proposal-whitelist/list
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin18: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal-whitelist/list`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalApproveCreate
     * @request POST:/newcoin/dao/proposal/approve
     * @secure
     */
    daoProposalApproveCreate: (BcApproveDaoProposalRequest: BcApproveDaoProposalRequest, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/newcoin/dao/proposal/approve`,
        method: "POST",
        body: BcApproveDaoProposalRequest,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin19
     * @request OPTIONS:/newcoin/dao/proposal/approve
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin19: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal/approve`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalExecuteCreate
     * @request POST:/newcoin/dao/proposal/execute
     * @secure
     */
    daoProposalExecuteCreate: (BcDaoProposalExecuteRequest: BcDaoProposalExecuteRequest, params: RequestParams = {}) =>
      this.request<BcDaoProposalExecuteResponse, ErrorResponse>({
        path: `/newcoin/dao/proposal/execute`,
        method: "POST",
        body: BcDaoProposalExecuteRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin20
     * @request OPTIONS:/newcoin/dao/proposal/execute
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin20: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal/execute`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalListList
     * @request GET:/newcoin/dao/proposal/list
     * @secure
     */
    daoProposalListList: (
      query?: {
        reverse?: string;
        proposalAuthor?: string;
        dao_owner?: string;
        dao_id?: string;
        limit?: string;
        lower_bound?: string;
        upper_bound?: string;
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BcListDaoProposalsResponse, ErrorResponse>({
        path: `/newcoin/dao/proposal/list`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin21
     * @request OPTIONS:/newcoin/dao/proposal/list
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin21: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal/list`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalVoteCreate
     * @request POST:/newcoin/dao/proposal/vote
     * @secure
     */
    daoProposalVoteCreate: (BcDaoProposalVoteRequest: BcDaoProposalVoteRequest, params: RequestParams = {}) =>
      this.request<BcListDaoProposalsResponse, ErrorResponse>({
        path: `/newcoin/dao/proposal/vote`,
        method: "POST",
        body: BcDaoProposalVoteRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin22
     * @request OPTIONS:/newcoin/dao/proposal/vote
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin22: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal/vote`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoProposalVotesList
     * @request GET:/newcoin/dao/proposal/votes
     * @secure
     */
    daoProposalVotesList: (
      query?: { reverse?: string; limit?: string; upper_bound?: string; voter?: string; lower_bound?: string },
      params: RequestParams = {},
    ) =>
      this.request<BcDaoProposalVoteResponse, ErrorResponse>({
        path: `/newcoin/dao/proposal/votes`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin23
     * @request OPTIONS:/newcoin/dao/proposal/votes
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin23: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/proposal/votes`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoWhitelistList
     * @request GET:/newcoin/dao/whitelist
     * @secure
     */
    daoWhitelistList: (
      query?: {
        reverse?: string;
        dao_owner?: string;
        dao_id?: string;
        limit?: string;
        upper_bound?: string;
        lower_bound?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BcListDaoWhitelistResponse, ErrorResponse>({
        path: `/newcoin/dao/whitelist`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin24
     * @request OPTIONS:/newcoin/dao/whitelist
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin24: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/whitelist`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DaoWithdrawVoteDepositCreate
     * @request POST:/newcoin/dao/withdrawVoteDeposit
     * @secure
     */
    daoWithdrawVoteDepositCreate: (
      BcDaoWidthdrawVoteDepositRequest: BcDaoWidthdrawVoteDepositRequest,
      params: RequestParams = {},
    ) =>
      this.request<BcDaoWidthdrawVoteDepositResponse, ErrorResponse>({
        path: `/newcoin/dao/withdrawVoteDeposit`,
        method: "POST",
        body: BcDaoWidthdrawVoteDepositRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsNewcoin25
     * @request OPTIONS:/newcoin/dao/withdrawVoteDeposit
     * @originalName optionsNewcoin
     * @duplicate
     */
    optionsNewcoin25: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/newcoin/dao/withdrawVoteDeposit`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  payment = {
    /**
     * No description
     *
     * @name StripeIntentCreate
     * @request POST:/payment/stripe/intent
     * @secure
     */
    stripeIntentCreate: (
      PaymentStripePaymentIntentCreateRequest: PaymentStripePaymentIntentCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<PaymentStripePaymentIntentCreateResponse, ErrorResponse>({
        path: `/payment/stripe/intent`,
        method: "POST",
        body: PaymentStripePaymentIntentCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPayment
     * @request OPTIONS:/payment/stripe/intent
     */
    optionsPayment: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payment/stripe/intent`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name StripeSubscriptionPaymentCreate
     * @request POST:/payment/stripe/subscription/payment
     * @secure
     */
    stripeSubscriptionPaymentCreate: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/payment/stripe/subscription/payment`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPayment2
     * @request OPTIONS:/payment/stripe/subscription/payment
     * @originalName optionsPayment
     * @duplicate
     */
    optionsPayment2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payment/stripe/subscription/payment`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name StripeWebhookCreate
     * @request POST:/payment/stripe/webhook
     */
    stripeWebhookCreate: (PaymentStripeWebhookRequest: PaymentStripeWebhookRequest, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/payment/stripe/webhook`,
        method: "POST",
        body: PaymentStripeWebhookRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPayment3
     * @request OPTIONS:/payment/stripe/webhook
     * @originalName optionsPayment
     * @duplicate
     */
    optionsPayment3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payment/stripe/webhook`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  post = {
    /**
     * No description
     *
     * @name PostList
     * @request GET:/post
     * @secure
     */
    postList: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<PostReadResponse, ErrorResponse>({
        path: `/post`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostCreate
     * @request POST:/post
     * @secure
     */
    postCreate: (PostCreateRequest: PostCreateRequest, params: RequestParams = {}) =>
      this.request<PostCreateResponse, ErrorResponse>({
        path: `/post`,
        method: "POST",
        body: PostCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostUpdate
     * @request PUT:/post
     * @secure
     */
    postUpdate: (PostUpdateRequest: PostUpdateRequest, params: RequestParams = {}) =>
      this.request<PostReadResponse, ErrorResponse>({
        path: `/post`,
        method: "PUT",
        body: PostUpdateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost
     * @request OPTIONS:/post
     */
    optionsPost: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ListSearchList
     * @request GET:/post/list/search
     * @secure
     */
    listSearchList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string; q?: string },
      params: RequestParams = {},
    ) =>
      this.request<PostPagedListReadPublicResponse, ErrorResponse>({
        path: `/post/list/search`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost2
     * @request OPTIONS:/post/list/search
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/list/search`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTagsSearchList
     * @request GET:/post/list/tags-search
     * @secure
     */
    listTagsSearchList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string; q?: string },
      params: RequestParams = {},
    ) =>
      this.request<PostTagsSearchPublicResponse, ErrorResponse>({
        path: `/post/list/tags-search`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost3
     * @request OPTIONS:/post/list/tags-search
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/list/tags-search`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTopList
     * @request GET:/post/list/top
     * @secure
     */
    listTopList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<PostPagedListReadPublicResponse, ErrorResponse>({
        path: `/post/list/top`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost4
     * @request OPTIONS:/post/list/top
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/list/top`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name RateCreate
     * @request POST:/post/rate
     * @secure
     */
    rateCreate: (RatingUpdateRequest: RatingUpdateRequest, params: RequestParams = {}) =>
      this.request<RatingUpdateResponse, ErrorResponse>({
        path: `/post/rate`,
        method: "POST",
        body: RatingUpdateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost5
     * @request OPTIONS:/post/rate
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/rate`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ReportCreate
     * @request POST:/post/report
     * @secure
     */
    reportCreate: (ReportUpdateRequest: ReportUpdateRequest, params: RequestParams = {}) =>
      this.request<ReportUpdateResponse, ErrorResponse>({
        path: `/post/report`,
        method: "POST",
        body: ReportUpdateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost6
     * @request OPTIONS:/post/report
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/report`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UploadCreate
     * @request POST:/post/upload
     * @secure
     */
    uploadCreate: (UploadRequestGeneric: UploadRequestGeneric, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/post/upload`,
        method: "POST",
        body: UploadRequestGeneric,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost7
     * @request OPTIONS:/post/upload
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost7: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/upload`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UtilsRemoteMetaProxyList
     * @request GET:/post/utils/remote-meta-proxy
     * @secure
     */
    utilsRemoteMetaProxyList: (query?: { url?: string }, params: RequestParams = {}) =>
      this.request<PostRemoteMetaProxyResponse, ErrorResponse>({
        path: `/post/utils/remote-meta-proxy`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost8
     * @request OPTIONS:/post/utils/remote-meta-proxy
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost8: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/utils/remote-meta-proxy`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @name CreativeList
     * @request GET:/search/creative
     * @secure
     */
    creativeList: (query?: { aesthetics?: string; tags?: string; page?: string }, params: RequestParams = {}) =>
      this.request<CreativeSearchResponse, ErrorResponse>({
        path: `/search/creative`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsSearch
     * @request OPTIONS:/search/creative
     */
    optionsSearch: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/search/creative`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @name NodeCreate
     * @request POST:/upload/node
     * @secure
     */
    nodeCreate: (UploadRequest: UploadRequest, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/upload/node`,
        method: "POST",
        body: UploadRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUpload
     * @request OPTIONS:/upload/node
     */
    optionsUpload: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/upload/node`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @name UserList
     * @request GET:/user
     * @secure
     */
    userList: (query?: { username?: string; id?: string }, params: RequestParams = {}) =>
      this.request<UserReadPublicResponse, ErrorResponse>({
        path: `/user`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserCreate
     * @request POST:/user
     * @secure
     */
    userCreate: (UserCreateRequest: UserCreateRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user`,
        method: "POST",
        body: UserCreateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserUpdate
     * @request PUT:/user
     * @secure
     */
    userUpdate: (UserUpdateRequest: UserUpdateRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user`,
        method: "PUT",
        body: UserUpdateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserDelete
     * @request DELETE:/user
     * @secure
     */
    userDelete: (UserDeleteRequest: UserDeleteRequest, params: RequestParams = {}) =>
      this.request<OkResponse, ErrorResponse>({
        path: `/user`,
        method: "DELETE",
        body: UserDeleteRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser
     * @request OPTIONS:/user
     */
    optionsUser: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ActivityStreamList
     * @request GET:/user/activityStream
     * @secure
     */
    activityStreamList: (query?: { after?: string; limit?: string }, params: RequestParams = {}) =>
      this.request<AnyResponse, ErrorResponse>({
        path: `/user/activityStream`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser2
     * @request OPTIONS:/user/activityStream
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/activityStream`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name AvailabilityList
     * @request GET:/user/availability
     */
    availabilityList: (query?: { username?: string }, params: RequestParams = {}) =>
      this.request<UserAvailabilityResponse, ErrorResponse>({
        path: `/user/availability`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser3
     * @request OPTIONS:/user/availability
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/availability`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name CurrentList
     * @request GET:/user/current
     * @secure
     */
    currentList: (params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user/current`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser4
     * @request OPTIONS:/user/current
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/current`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name InviteCreate
     * @request POST:/user/invite
     * @secure
     */
    inviteCreate: (UserInviteRequest: UserInviteRequest, params: RequestParams = {}) =>
      this.request<OkResponse, ErrorResponse>({
        path: `/user/invite`,
        method: "POST",
        body: UserInviteRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser5
     * @request OPTIONS:/user/invite
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invite`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name InviteHashList
     * @request GET:/user/invite/hash
     */
    inviteHashList: (query?: { hash?: string }, params: RequestParams = {}) =>
      this.request<UserInvitationReadPublicResponse, ErrorResponse>({
        path: `/user/invite/hash`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser6
     * @request OPTIONS:/user/invite/hash
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invite/hash`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name InviteesList
     * @request GET:/user/invitees
     * @secure
     */
    inviteesList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserInvitationPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/invitees`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser7
     * @request OPTIONS:/user/invitees
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser7: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invitees`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name InvitorList
     * @request GET:/user/invitor
     * @secure
     */
    invitorList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserInvitationPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/invitor`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser8
     * @request OPTIONS:/user/invitor
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser8: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invitor`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ListSearchList
     * @request GET:/user/list/search
     * @secure
     */
    listSearchList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string; q?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/list/search`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser9
     * @request OPTIONS:/user/list/search
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser9: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/list/search`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTopList
     * @request GET:/user/list/top
     * @secure
     */
    listTopList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/list/top`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser10
     * @request OPTIONS:/user/list/top
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser10: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/list/top`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name MoodsList
     * @request GET:/user/moods
     * @secure
     */
    moodsList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<MoodPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/moods`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser11
     * @request OPTIONS:/user/moods
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser11: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/moods`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name PreregisterCreate
     * @request POST:/user/preregister
     * @secure
     */
    preregisterCreate: (UserPreRegisterRequest: UserPreRegisterRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user/preregister`,
        method: "POST",
        body: UserPreRegisterRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser12
     * @request OPTIONS:/user/preregister
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser12: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/preregister`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name RatedInList
     * @request GET:/user/rated/in
     * @secure
     */
    ratedInList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<PagedRatedResponseUser, ErrorResponse>({
        path: `/user/rated/in`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser13
     * @request OPTIONS:/user/rated/in
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser13: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rated/in`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name RatedOutPostsList
     * @request GET:/user/rated/out/posts
     * @secure
     */
    ratedOutPostsList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<PagedRatedResponsePost, ErrorResponse>({
        path: `/user/rated/out/posts`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser14
     * @request OPTIONS:/user/rated/out/posts
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser14: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rated/out/posts`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name RatedOutUsersList
     * @request GET:/user/rated/out/users
     * @secure
     */
    ratedOutUsersList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<PagedRatedResponseUser, ErrorResponse>({
        path: `/user/rated/out/users`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser15
     * @request OPTIONS:/user/rated/out/users
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser15: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rated/out/users`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name StakeCreate
     * @request POST:/user/stake
     * @secure
     */
    stakeCreate: (UserStakeRequest: UserStakeRequest, params: RequestParams = {}) =>
      this.request<AnyResponse, ErrorResponse>({
        path: `/user/stake`,
        method: "POST",
        body: UserStakeRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser16
     * @request OPTIONS:/user/stake
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser16: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/stake`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name SyncContactsCreate
     * @request POST:/user/syncContacts
     * @secure
     */
    syncContactsCreate: (SyncContactsRequest: SyncContactsRequest, params: RequestParams = {}) =>
      this.request<SyncContactsResponse, ErrorResponse>({
        path: `/user/syncContacts`,
        method: "POST",
        body: SyncContactsRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser17
     * @request OPTIONS:/user/syncContacts
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser17: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/syncContacts`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name TransferCreate
     * @request POST:/user/transfer
     * @secure
     */
    transferCreate: (UserTransferRequest: UserTransferRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user/transfer`,
        method: "POST",
        body: UserTransferRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser18
     * @request OPTIONS:/user/transfer
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser18: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/transfer`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UploadCreate
     * @request POST:/user/upload
     * @secure
     */
    uploadCreate: (UserUploadRequest: UserUploadRequest, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/user/upload`,
        method: "POST",
        body: UserUploadRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser19
     * @request OPTIONS:/user/upload
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser19: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/upload`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UserRateCreate
     * @request POST:/user/userRate
     * @secure
     */
    userRateCreate: (RatingUpdateRequest: RatingUpdateRequest, params: RequestParams = {}) =>
      this.request<RatingUpdateResponse, ErrorResponse>({
        path: `/user/userRate`,
        method: "POST",
        body: RatingUpdateRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser20
     * @request OPTIONS:/user/userRate
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser20: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/userRate`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),
  };
}
