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



#include "UserInviteRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

UserInviteRequest::UserInviteRequest()
{
    m_Youtube = utility::conversions::to_string_t("");
    m_YoutubeIsSet = false;
    m_Spotify = utility::conversions::to_string_t("");
    m_SpotifyIsSet = false;
    m_Facebook = utility::conversions::to_string_t("");
    m_FacebookIsSet = false;
    m_FullName = utility::conversions::to_string_t("");
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
    m_Phone = utility::conversions::to_string_t("");
    m_Tiktok = utility::conversions::to_string_t("");
    m_TiktokIsSet = false;
    m_Reddit = utility::conversions::to_string_t("");
    m_RedditIsSet = false;
    m_Signal = utility::conversions::to_string_t("");
    m_SignalIsSet = false;
    m_Email = utility::conversions::to_string_t("");
    m_EmailIsSet = false;
}

UserInviteRequest::~UserInviteRequest()
{
}

void UserInviteRequest::validate()
{
    // TODO: implement validation
}

web::json::value UserInviteRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_YoutubeIsSet)
    {
        val[utility::conversions::to_string_t("youtube")] = ModelBase::toJson(m_Youtube);
    }
    if(m_SpotifyIsSet)
    {
        val[utility::conversions::to_string_t("spotify")] = ModelBase::toJson(m_Spotify);
    }
    if(m_FacebookIsSet)
    {
        val[utility::conversions::to_string_t("facebook")] = ModelBase::toJson(m_Facebook);
    }
    val[utility::conversions::to_string_t("fullName")] = ModelBase::toJson(m_FullName);
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
    val[utility::conversions::to_string_t("phone")] = ModelBase::toJson(m_Phone);
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
    if(m_EmailIsSet)
    {
        val[utility::conversions::to_string_t("email")] = ModelBase::toJson(m_Email);
    }

    return val;
}

void UserInviteRequest::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("youtube")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("youtube")];
        if(!fieldValue.is_null())
        {
            setYoutube(ModelBase::stringFromJson(fieldValue));
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
    setFullName(ModelBase::stringFromJson(val[utility::conversions::to_string_t("fullName")]));
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
    setPhone(ModelBase::stringFromJson(val[utility::conversions::to_string_t("phone")]));
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
    if(val.has_field(utility::conversions::to_string_t("email")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("email")];
        if(!fieldValue.is_null())
        {
            setEmail(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void UserInviteRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
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
    if(m_SpotifyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("spotify"), m_Spotify));
        
    }
    if(m_FacebookIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("facebook"), m_Facebook));
        
    }
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("fullName"), m_FullName));
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
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("phone"), m_Phone));
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
    if(m_EmailIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("email"), m_Email));
        
    }
}

void UserInviteRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
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
    if(multipart->hasContent(utility::conversions::to_string_t("spotify")))
    {
        setSpotify(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("spotify"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("facebook")))
    {
        setFacebook(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("facebook"))));
    }
    setFullName(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("fullName"))));
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
    setPhone(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("phone"))));
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
    if(multipart->hasContent(utility::conversions::to_string_t("email")))
    {
        setEmail(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("email"))));
    }
}

utility::string_t UserInviteRequest::getYoutube() const
{
    return m_Youtube;
}


void UserInviteRequest::setYoutube(utility::string_t value)
{
    m_Youtube = value;
    m_YoutubeIsSet = true;
}
bool UserInviteRequest::youtubeIsSet() const
{
    return m_YoutubeIsSet;
}

void UserInviteRequest::unsetYoutube()
{
    m_YoutubeIsSet = false;
}

utility::string_t UserInviteRequest::getSpotify() const
{
    return m_Spotify;
}


void UserInviteRequest::setSpotify(utility::string_t value)
{
    m_Spotify = value;
    m_SpotifyIsSet = true;
}
bool UserInviteRequest::spotifyIsSet() const
{
    return m_SpotifyIsSet;
}

void UserInviteRequest::unsetSpotify()
{
    m_SpotifyIsSet = false;
}

utility::string_t UserInviteRequest::getFacebook() const
{
    return m_Facebook;
}


void UserInviteRequest::setFacebook(utility::string_t value)
{
    m_Facebook = value;
    m_FacebookIsSet = true;
}
bool UserInviteRequest::facebookIsSet() const
{
    return m_FacebookIsSet;
}

void UserInviteRequest::unsetFacebook()
{
    m_FacebookIsSet = false;
}

utility::string_t UserInviteRequest::getFullName() const
{
    return m_FullName;
}


void UserInviteRequest::setFullName(utility::string_t value)
{
    m_FullName = value;
    
}
utility::string_t UserInviteRequest::getTumblr() const
{
    return m_Tumblr;
}


void UserInviteRequest::setTumblr(utility::string_t value)
{
    m_Tumblr = value;
    m_TumblrIsSet = true;
}
bool UserInviteRequest::tumblrIsSet() const
{
    return m_TumblrIsSet;
}

void UserInviteRequest::unsetTumblr()
{
    m_TumblrIsSet = false;
}

utility::string_t UserInviteRequest::getTelegram() const
{
    return m_Telegram;
}


void UserInviteRequest::setTelegram(utility::string_t value)
{
    m_Telegram = value;
    m_TelegramIsSet = true;
}
bool UserInviteRequest::telegramIsSet() const
{
    return m_TelegramIsSet;
}

void UserInviteRequest::unsetTelegram()
{
    m_TelegramIsSet = false;
}

utility::string_t UserInviteRequest::getPinterest() const
{
    return m_Pinterest;
}


void UserInviteRequest::setPinterest(utility::string_t value)
{
    m_Pinterest = value;
    m_PinterestIsSet = true;
}
bool UserInviteRequest::pinterestIsSet() const
{
    return m_PinterestIsSet;
}

void UserInviteRequest::unsetPinterest()
{
    m_PinterestIsSet = false;
}

utility::string_t UserInviteRequest::getInstagram() const
{
    return m_Instagram;
}


void UserInviteRequest::setInstagram(utility::string_t value)
{
    m_Instagram = value;
    m_InstagramIsSet = true;
}
bool UserInviteRequest::instagramIsSet() const
{
    return m_InstagramIsSet;
}

void UserInviteRequest::unsetInstagram()
{
    m_InstagramIsSet = false;
}

utility::string_t UserInviteRequest::getMedium() const
{
    return m_Medium;
}


void UserInviteRequest::setMedium(utility::string_t value)
{
    m_Medium = value;
    m_MediumIsSet = true;
}
bool UserInviteRequest::mediumIsSet() const
{
    return m_MediumIsSet;
}

void UserInviteRequest::unsetMedium()
{
    m_MediumIsSet = false;
}

utility::string_t UserInviteRequest::getSoundcloud() const
{
    return m_Soundcloud;
}


void UserInviteRequest::setSoundcloud(utility::string_t value)
{
    m_Soundcloud = value;
    m_SoundcloudIsSet = true;
}
bool UserInviteRequest::soundcloudIsSet() const
{
    return m_SoundcloudIsSet;
}

void UserInviteRequest::unsetSoundcloud()
{
    m_SoundcloudIsSet = false;
}

utility::string_t UserInviteRequest::getSnapchat() const
{
    return m_Snapchat;
}


void UserInviteRequest::setSnapchat(utility::string_t value)
{
    m_Snapchat = value;
    m_SnapchatIsSet = true;
}
bool UserInviteRequest::snapchatIsSet() const
{
    return m_SnapchatIsSet;
}

void UserInviteRequest::unsetSnapchat()
{
    m_SnapchatIsSet = false;
}

utility::string_t UserInviteRequest::getApple() const
{
    return m_Apple;
}


void UserInviteRequest::setApple(utility::string_t value)
{
    m_Apple = value;
    m_AppleIsSet = true;
}
bool UserInviteRequest::appleIsSet() const
{
    return m_AppleIsSet;
}

void UserInviteRequest::unsetApple()
{
    m_AppleIsSet = false;
}

utility::string_t UserInviteRequest::getTwitter() const
{
    return m_Twitter;
}


void UserInviteRequest::setTwitter(utility::string_t value)
{
    m_Twitter = value;
    m_TwitterIsSet = true;
}
bool UserInviteRequest::twitterIsSet() const
{
    return m_TwitterIsSet;
}

void UserInviteRequest::unsetTwitter()
{
    m_TwitterIsSet = false;
}

utility::string_t UserInviteRequest::getDiscord() const
{
    return m_Discord;
}


void UserInviteRequest::setDiscord(utility::string_t value)
{
    m_Discord = value;
    m_DiscordIsSet = true;
}
bool UserInviteRequest::discordIsSet() const
{
    return m_DiscordIsSet;
}

void UserInviteRequest::unsetDiscord()
{
    m_DiscordIsSet = false;
}

utility::string_t UserInviteRequest::getPhone() const
{
    return m_Phone;
}


void UserInviteRequest::setPhone(utility::string_t value)
{
    m_Phone = value;
    
}
utility::string_t UserInviteRequest::getTiktok() const
{
    return m_Tiktok;
}


void UserInviteRequest::setTiktok(utility::string_t value)
{
    m_Tiktok = value;
    m_TiktokIsSet = true;
}
bool UserInviteRequest::tiktokIsSet() const
{
    return m_TiktokIsSet;
}

void UserInviteRequest::unsetTiktok()
{
    m_TiktokIsSet = false;
}

utility::string_t UserInviteRequest::getReddit() const
{
    return m_Reddit;
}


void UserInviteRequest::setReddit(utility::string_t value)
{
    m_Reddit = value;
    m_RedditIsSet = true;
}
bool UserInviteRequest::redditIsSet() const
{
    return m_RedditIsSet;
}

void UserInviteRequest::unsetReddit()
{
    m_RedditIsSet = false;
}

utility::string_t UserInviteRequest::getSignal() const
{
    return m_Signal;
}


void UserInviteRequest::setSignal(utility::string_t value)
{
    m_Signal = value;
    m_SignalIsSet = true;
}
bool UserInviteRequest::signalIsSet() const
{
    return m_SignalIsSet;
}

void UserInviteRequest::unsetSignal()
{
    m_SignalIsSet = false;
}

utility::string_t UserInviteRequest::getEmail() const
{
    return m_Email;
}


void UserInviteRequest::setEmail(utility::string_t value)
{
    m_Email = value;
    m_EmailIsSet = true;
}
bool UserInviteRequest::emailIsSet() const
{
    return m_EmailIsSet;
}

void UserInviteRequest::unsetEmail()
{
    m_EmailIsSet = false;
}

}
}
}
}

