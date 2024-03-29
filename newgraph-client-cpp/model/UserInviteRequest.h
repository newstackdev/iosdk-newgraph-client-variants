/**
 * newgraph-api-eu-dev
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.27.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * UserInviteRequest.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_UserInviteRequest_H_
#define IO_SWAGGER_CLIENT_MODEL_UserInviteRequest_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  UserInviteRequest
    : public ModelBase
{
public:
    UserInviteRequest();
    virtual ~UserInviteRequest();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// UserInviteRequest members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getYoutube() const;
    bool youtubeIsSet() const;
    void unsetYoutube();
    void setYoutube(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getSpotify() const;
    bool spotifyIsSet() const;
    void unsetSpotify();
    void setSpotify(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getFacebook() const;
    bool facebookIsSet() const;
    void unsetFacebook();
    void setFacebook(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getFullName() const;
        void setFullName(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTumblr() const;
    bool tumblrIsSet() const;
    void unsetTumblr();
    void setTumblr(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTelegram() const;
    bool telegramIsSet() const;
    void unsetTelegram();
    void setTelegram(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getPinterest() const;
    bool pinterestIsSet() const;
    void unsetPinterest();
    void setPinterest(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getInstagram() const;
    bool instagramIsSet() const;
    void unsetInstagram();
    void setInstagram(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getMedium() const;
    bool mediumIsSet() const;
    void unsetMedium();
    void setMedium(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getSoundcloud() const;
    bool soundcloudIsSet() const;
    void unsetSoundcloud();
    void setSoundcloud(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getSnapchat() const;
    bool snapchatIsSet() const;
    void unsetSnapchat();
    void setSnapchat(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getApple() const;
    bool appleIsSet() const;
    void unsetApple();
    void setApple(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTwitter() const;
    bool twitterIsSet() const;
    void unsetTwitter();
    void setTwitter(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getDiscord() const;
    bool discordIsSet() const;
    void unsetDiscord();
    void setDiscord(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getPhone() const;
        void setPhone(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTiktok() const;
    bool tiktokIsSet() const;
    void unsetTiktok();
    void setTiktok(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getReddit() const;
    bool redditIsSet() const;
    void unsetReddit();
    void setReddit(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getSignal() const;
    bool signalIsSet() const;
    void unsetSignal();
    void setSignal(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getEmail() const;
    bool emailIsSet() const;
    void unsetEmail();
    void setEmail(utility::string_t value);

protected:
    utility::string_t m_Youtube;
    bool m_YoutubeIsSet;
    utility::string_t m_Spotify;
    bool m_SpotifyIsSet;
    utility::string_t m_Facebook;
    bool m_FacebookIsSet;
    utility::string_t m_FullName;
        utility::string_t m_Tumblr;
    bool m_TumblrIsSet;
    utility::string_t m_Telegram;
    bool m_TelegramIsSet;
    utility::string_t m_Pinterest;
    bool m_PinterestIsSet;
    utility::string_t m_Instagram;
    bool m_InstagramIsSet;
    utility::string_t m_Medium;
    bool m_MediumIsSet;
    utility::string_t m_Soundcloud;
    bool m_SoundcloudIsSet;
    utility::string_t m_Snapchat;
    bool m_SnapchatIsSet;
    utility::string_t m_Apple;
    bool m_AppleIsSet;
    utility::string_t m_Twitter;
    bool m_TwitterIsSet;
    utility::string_t m_Discord;
    bool m_DiscordIsSet;
    utility::string_t m_Phone;
        utility::string_t m_Tiktok;
    bool m_TiktokIsSet;
    utility::string_t m_Reddit;
    bool m_RedditIsSet;
    utility::string_t m_Signal;
    bool m_SignalIsSet;
    utility::string_t m_Email;
    bool m_EmailIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_UserInviteRequest_H_ */
