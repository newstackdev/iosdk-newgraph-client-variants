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



#include "UserInvitationPagedListReadPublicResponse_invitation.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

UserInvitationPagedListReadPublicResponse_invitation::UserInvitationPagedListReadPublicResponse_invitation()
{
    m_Youtube = utility::conversions::to_string_t("");
    m_YoutubeIsSet = false;
    m_Created = utility::conversions::to_string_t("");
    m_CreatedIsSet = false;
    m_Spotify = utility::conversions::to_string_t("");
    m_SpotifyIsSet = false;
    m_Facebook = utility::conversions::to_string_t("");
    m_FacebookIsSet = false;
    m_Tumblr = utility::conversions::to_string_t("");
    m_TumblrIsSet = false;
    m_Telegram = utility::conversions::to_string_t("");
    m_TelegramIsSet = false;
    m_Pinterest = utility::conversions::to_string_t("");
    m_PinterestIsSet = false;
    m_Instagram = utility::conversions::to_string_t("");
    m_InstagramIsSet = false;
    m_Medium = utility::conversions::to_string_t("");
    m_MediumIsSet = false;
    m_Soundcloud = utility::conversions::to_string_t("");
    m_SoundcloudIsSet = false;
    m_Snapchat = utility::conversions::to_string_t("");
    m_SnapchatIsSet = false;
    m_Apple = utility::conversions::to_string_t("");
    m_AppleIsSet = false;
    m_Twitter = utility::conversions::to_string_t("");
    m_TwitterIsSet = false;
    m_Discord = utility::conversions::to_string_t("");
    m_DiscordIsSet = false;
    m_Tiktok = utility::conversions::to_string_t("");
    m_TiktokIsSet = false;
    m_Reddit = utility::conversions::to_string_t("");
    m_RedditIsSet = false;
    m_Signal = utility::conversions::to_string_t("");
    m_SignalIsSet = false;
    m_Hash = utility::conversions::to_string_t("");
    m_HashIsSet = false;
}

UserInvitationPagedListReadPublicResponse_invitation::~UserInvitationPagedListReadPublicResponse_invitation()
{
}

void UserInvitationPagedListReadPublicResponse_invitation::validate()
{
    // TODO: implement validation
}

web::json::value UserInvitationPagedListReadPublicResponse_invitation::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_YoutubeIsSet)
    {
        val[utility::conversions::to_string_t("youtube")] = ModelBase::toJson(m_Youtube);
    }
    if(m_CreatedIsSet)
    {
        val[utility::conversions::to_string_t("created")] = ModelBase::toJson(m_Created);
    }
    if(m_SpotifyIsSet)
    {
        val[utility::conversions::to_string_t("spotify")] = ModelBase::toJson(m_Spotify);
    }
    if(m_FacebookIsSet)
    {
        val[utility::conversions::to_string_t("facebook")] = ModelBase::toJson(m_Facebook);
    }
    if(m_TumblrIsSet)
    {
        val[utility::conversions::to_string_t("tumblr")] = ModelBase::toJson(m_Tumblr);
    }
    if(m_TelegramIsSet)
    {
        val[utility::conversions::to_string_t("telegram")] = ModelBase::toJson(m_Telegram);
    }
    if(m_PinterestIsSet)
    {
        val[utility::conversions::to_string_t("pinterest")] = ModelBase::toJson(m_Pinterest);
    }
    if(m_InstagramIsSet)
    {
        val[utility::conversions::to_string_t("instagram")] = ModelBase::toJson(m_Instagram);
    }
    if(m_MediumIsSet)
    {
        val[utility::conversions::to_string_t("medium")] = ModelBase::toJson(m_Medium);
    }
    if(m_SoundcloudIsSet)
    {
        val[utility::conversions::to_string_t("soundcloud")] = ModelBase::toJson(m_Soundcloud);
    }
    if(m_SnapchatIsSet)
    {
        val[utility::conversions::to_string_t("snapchat")] = ModelBase::toJson(m_Snapchat);
    }
    if(m_AppleIsSet)
    {
        val[utility::conversions::to_string_t("apple")] = ModelBase::toJson(m_Apple);
    }
    if(m_TwitterIsSet)
    {
        val[utility::conversions::to_string_t("twitter")] = ModelBase::toJson(m_Twitter);
    }
    if(m_DiscordIsSet)
    {
        val[utility::conversions::to_string_t("discord")] = ModelBase::toJson(m_Discord);
    }
    if(m_TiktokIsSet)
    {
        val[utility::conversions::to_string_t("tiktok")] = ModelBase::toJson(m_Tiktok);
    }
    if(m_RedditIsSet)
    {
        val[utility::conversions::to_string_t("reddit")] = ModelBase::toJson(m_Reddit);
    }
    if(m_SignalIsSet)
    {
        val[utility::conversions::to_string_t("signal")] = ModelBase::toJson(m_Signal);
    }
    if(m_HashIsSet)
    {
        val[utility::conversions::to_string_t("hash")] = ModelBase::toJson(m_Hash);
    }

    return val;
}

void UserInvitationPagedListReadPublicResponse_invitation::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("youtube")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("youtube")];
        if(!fieldValue.is_null())
        {
            setYoutube(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("created")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("created")];
        if(!fieldValue.is_null())
        {
            setCreated(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("spotify")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("spotify")];
        if(!fieldValue.is_null())
        {
            setSpotify(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("facebook")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("facebook")];
        if(!fieldValue.is_null())
        {
            setFacebook(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("tumblr")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("tumblr")];
        if(!fieldValue.is_null())
        {
            setTumblr(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("telegram")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("telegram")];
        if(!fieldValue.is_null())
        {
            setTelegram(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("pinterest")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("pinterest")];
        if(!fieldValue.is_null())
        {
            setPinterest(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("instagram")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("instagram")];
        if(!fieldValue.is_null())
        {
            setInstagram(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("medium")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("medium")];
        if(!fieldValue.is_null())
        {
            setMedium(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("soundcloud")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("soundcloud")];
        if(!fieldValue.is_null())
        {
            setSoundcloud(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("snapchat")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("snapchat")];
        if(!fieldValue.is_null())
        {
            setSnapchat(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("apple")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("apple")];
        if(!fieldValue.is_null())
        {
            setApple(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("twitter")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("twitter")];
        if(!fieldValue.is_null())
        {
            setTwitter(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("discord")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("discord")];
        if(!fieldValue.is_null())
        {
            setDiscord(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("tiktok")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("tiktok")];
        if(!fieldValue.is_null())
        {
            setTiktok(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("reddit")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("reddit")];
        if(!fieldValue.is_null())
        {
            setReddit(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("signal")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("signal")];
        if(!fieldValue.is_null())
        {
            setSignal(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("hash")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("hash")];
        if(!fieldValue.is_null())
        {
            setHash(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void UserInvitationPagedListReadPublicResponse_invitation::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_YoutubeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("youtube"), m_Youtube));
        
    }
    if(m_CreatedIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("created"), m_Created));
        
    }
    if(m_SpotifyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("spotify"), m_Spotify));
        
    }
    if(m_FacebookIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("facebook"), m_Facebook));
        
    }
    if(m_TumblrIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("tumblr"), m_Tumblr));
        
    }
    if(m_TelegramIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("telegram"), m_Telegram));
        
    }
    if(m_PinterestIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("pinterest"), m_Pinterest));
        
    }
    if(m_InstagramIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("instagram"), m_Instagram));
        
    }
    if(m_MediumIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("medium"), m_Medium));
        
    }
    if(m_SoundcloudIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("soundcloud"), m_Soundcloud));
        
    }
    if(m_SnapchatIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("snapchat"), m_Snapchat));
        
    }
    if(m_AppleIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("apple"), m_Apple));
        
    }
    if(m_TwitterIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("twitter"), m_Twitter));
        
    }
    if(m_DiscordIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("discord"), m_Discord));
        
    }
    if(m_TiktokIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("tiktok"), m_Tiktok));
        
    }
    if(m_RedditIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("reddit"), m_Reddit));
        
    }
    if(m_SignalIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("signal"), m_Signal));
        
    }
    if(m_HashIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("hash"), m_Hash));
        
    }
}

void UserInvitationPagedListReadPublicResponse_invitation::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("youtube")))
    {
        setYoutube(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("youtube"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("created")))
    {
        setCreated(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("created"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("spotify")))
    {
        setSpotify(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("spotify"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("facebook")))
    {
        setFacebook(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("facebook"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("tumblr")))
    {
        setTumblr(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("tumblr"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("telegram")))
    {
        setTelegram(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("telegram"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("pinterest")))
    {
        setPinterest(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("pinterest"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("instagram")))
    {
        setInstagram(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("instagram"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("medium")))
    {
        setMedium(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("medium"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("soundcloud")))
    {
        setSoundcloud(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("soundcloud"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("snapchat")))
    {
        setSnapchat(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("snapchat"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("apple")))
    {
        setApple(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("apple"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("twitter")))
    {
        setTwitter(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("twitter"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("discord")))
    {
        setDiscord(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("discord"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("tiktok")))
    {
        setTiktok(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("tiktok"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("reddit")))
    {
        setReddit(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("reddit"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("signal")))
    {
        setSignal(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("signal"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("hash")))
    {
        setHash(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("hash"))));
    }
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getYoutube() const
{
    return m_Youtube;
}


void UserInvitationPagedListReadPublicResponse_invitation::setYoutube(utility::string_t value)
{
    m_Youtube = value;
    m_YoutubeIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::youtubeIsSet() const
{
    return m_YoutubeIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetYoutube()
{
    m_YoutubeIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getCreated() const
{
    return m_Created;
}


void UserInvitationPagedListReadPublicResponse_invitation::setCreated(utility::string_t value)
{
    m_Created = value;
    m_CreatedIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::createdIsSet() const
{
    return m_CreatedIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetCreated()
{
    m_CreatedIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getSpotify() const
{
    return m_Spotify;
}


void UserInvitationPagedListReadPublicResponse_invitation::setSpotify(utility::string_t value)
{
    m_Spotify = value;
    m_SpotifyIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::spotifyIsSet() const
{
    return m_SpotifyIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetSpotify()
{
    m_SpotifyIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getFacebook() const
{
    return m_Facebook;
}


void UserInvitationPagedListReadPublicResponse_invitation::setFacebook(utility::string_t value)
{
    m_Facebook = value;
    m_FacebookIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::facebookIsSet() const
{
    return m_FacebookIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetFacebook()
{
    m_FacebookIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getTumblr() const
{
    return m_Tumblr;
}


void UserInvitationPagedListReadPublicResponse_invitation::setTumblr(utility::string_t value)
{
    m_Tumblr = value;
    m_TumblrIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::tumblrIsSet() const
{
    return m_TumblrIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetTumblr()
{
    m_TumblrIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getTelegram() const
{
    return m_Telegram;
}


void UserInvitationPagedListReadPublicResponse_invitation::setTelegram(utility::string_t value)
{
    m_Telegram = value;
    m_TelegramIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::telegramIsSet() const
{
    return m_TelegramIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetTelegram()
{
    m_TelegramIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getPinterest() const
{
    return m_Pinterest;
}


void UserInvitationPagedListReadPublicResponse_invitation::setPinterest(utility::string_t value)
{
    m_Pinterest = value;
    m_PinterestIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::pinterestIsSet() const
{
    return m_PinterestIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetPinterest()
{
    m_PinterestIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getInstagram() const
{
    return m_Instagram;
}


void UserInvitationPagedListReadPublicResponse_invitation::setInstagram(utility::string_t value)
{
    m_Instagram = value;
    m_InstagramIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::instagramIsSet() const
{
    return m_InstagramIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetInstagram()
{
    m_InstagramIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getMedium() const
{
    return m_Medium;
}


void UserInvitationPagedListReadPublicResponse_invitation::setMedium(utility::string_t value)
{
    m_Medium = value;
    m_MediumIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::mediumIsSet() const
{
    return m_MediumIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetMedium()
{
    m_MediumIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getSoundcloud() const
{
    return m_Soundcloud;
}


void UserInvitationPagedListReadPublicResponse_invitation::setSoundcloud(utility::string_t value)
{
    m_Soundcloud = value;
    m_SoundcloudIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::soundcloudIsSet() const
{
    return m_SoundcloudIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetSoundcloud()
{
    m_SoundcloudIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getSnapchat() const
{
    return m_Snapchat;
}


void UserInvitationPagedListReadPublicResponse_invitation::setSnapchat(utility::string_t value)
{
    m_Snapchat = value;
    m_SnapchatIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::snapchatIsSet() const
{
    return m_SnapchatIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetSnapchat()
{
    m_SnapchatIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getApple() const
{
    return m_Apple;
}


void UserInvitationPagedListReadPublicResponse_invitation::setApple(utility::string_t value)
{
    m_Apple = value;
    m_AppleIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::appleIsSet() const
{
    return m_AppleIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetApple()
{
    m_AppleIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getTwitter() const
{
    return m_Twitter;
}


void UserInvitationPagedListReadPublicResponse_invitation::setTwitter(utility::string_t value)
{
    m_Twitter = value;
    m_TwitterIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::twitterIsSet() const
{
    return m_TwitterIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetTwitter()
{
    m_TwitterIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getDiscord() const
{
    return m_Discord;
}


void UserInvitationPagedListReadPublicResponse_invitation::setDiscord(utility::string_t value)
{
    m_Discord = value;
    m_DiscordIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::discordIsSet() const
{
    return m_DiscordIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetDiscord()
{
    m_DiscordIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getTiktok() const
{
    return m_Tiktok;
}


void UserInvitationPagedListReadPublicResponse_invitation::setTiktok(utility::string_t value)
{
    m_Tiktok = value;
    m_TiktokIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::tiktokIsSet() const
{
    return m_TiktokIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetTiktok()
{
    m_TiktokIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getReddit() const
{
    return m_Reddit;
}


void UserInvitationPagedListReadPublicResponse_invitation::setReddit(utility::string_t value)
{
    m_Reddit = value;
    m_RedditIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::redditIsSet() const
{
    return m_RedditIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetReddit()
{
    m_RedditIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getSignal() const
{
    return m_Signal;
}


void UserInvitationPagedListReadPublicResponse_invitation::setSignal(utility::string_t value)
{
    m_Signal = value;
    m_SignalIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::signalIsSet() const
{
    return m_SignalIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetSignal()
{
    m_SignalIsSet = false;
}

utility::string_t UserInvitationPagedListReadPublicResponse_invitation::getHash() const
{
    return m_Hash;
}


void UserInvitationPagedListReadPublicResponse_invitation::setHash(utility::string_t value)
{
    m_Hash = value;
    m_HashIsSet = true;
}
bool UserInvitationPagedListReadPublicResponse_invitation::hashIsSet() const
{
    return m_HashIsSet;
}

void UserInvitationPagedListReadPublicResponse_invitation::unsetHash()
{
    m_HashIsSet = false;
}

}
}
}
}
