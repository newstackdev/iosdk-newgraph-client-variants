part of swagger.api;

class MoodReadResponse {
  
  String created = null;
  

  MoodPagedListReadPublicResponseAuthor author = null;
  

  num latitude = null;
  

  String description = null;
  

  num aspectRatio = null;
  

  String title = null;
  

  List<MoodPagedListReadPublicResponsePosts> posts = [];
  

  String content = null;
  

  num stakeToAccess = null;
  

  List<MoodPagedListReadPublicResponseTags> tags = [];
  

  String contentUrl = null;
  

  num postsCount = null;
  

  String blurHash = null;
  

  String id = null;
  

  String updated = null;
  

  String contentType = null;
  

  num longitude = null;
  
  MoodReadResponse();

  @override
  String toString() {
    return 'MoodReadResponse[created=$created, author=$author, latitude=$latitude, description=$description, aspectRatio=$aspectRatio, title=$title, posts=$posts, content=$content, stakeToAccess=$stakeToAccess, tags=$tags, contentUrl=$contentUrl, postsCount=$postsCount, blurHash=$blurHash, id=$id, updated=$updated, contentType=$contentType, longitude=$longitude, ]';
  }

  MoodReadResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    created =
        json['created']
    ;
    author =
      
      
      new MoodPagedListReadPublicResponseAuthor.fromJson(json['author'])
;
    latitude =
        json['latitude']
    ;
    description =
        json['description']
    ;
    aspectRatio =
        json['aspectRatio']
    ;
    title =
        json['title']
    ;
    posts =
      MoodPagedListReadPublicResponsePosts.listFromJson(json['posts'])
;
    content =
        json['content']
    ;
    stakeToAccess =
        json['stakeToAccess']
    ;
    tags =
      MoodPagedListReadPublicResponseTags.listFromJson(json['tags'])
;
    contentUrl =
        json['contentUrl']
    ;
    postsCount =
        json['postsCount']
    ;
    blurHash =
        json['blurHash']
    ;
    id =
        json['id']
    ;
    updated =
        json['updated']
    ;
    contentType =
        json['contentType']
    ;
    longitude =
        json['longitude']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'created': created,
      'author': author,
      'latitude': latitude,
      'description': description,
      'aspectRatio': aspectRatio,
      'title': title,
      'posts': posts,
      'content': content,
      'stakeToAccess': stakeToAccess,
      'tags': tags,
      'contentUrl': contentUrl,
      'postsCount': postsCount,
      'blurHash': blurHash,
      'id': id,
      'updated': updated,
      'contentType': contentType,
      'longitude': longitude
     };
  }

  static List<MoodReadResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodReadResponse>() : json.map((value) => new MoodReadResponse.fromJson(value)).toList();
  }

  static Map<String, MoodReadResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodReadResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodReadResponse.fromJson(value));
    }
    return map;
  }
}

