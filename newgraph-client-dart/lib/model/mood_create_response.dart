part of swagger.api;

class MoodCreateResponse {
  
  String created = null;
  

  PagedRatedResponsePostAuthor author = null;
  

  num latitude = null;
  

  String description = null;
  

  num aspectRatio = null;
  

  String title = null;
  

  List<MoodCreateResponsePosts> posts = [];
  

  String content = null;
  

  num stakeToAccess = null;
  

  List<PagedRatedResponsePostTags> tags = [];
  

  String contentUrl = null;
  

  num postsCount = null;
  

  String blurHash = null;
  

  String id = null;
  

  String updated = null;
  

  String contentType = null;
  

  num longitude = null;
  
  MoodCreateResponse();

  @override
  String toString() {
    return 'MoodCreateResponse[created=$created, author=$author, latitude=$latitude, description=$description, aspectRatio=$aspectRatio, title=$title, posts=$posts, content=$content, stakeToAccess=$stakeToAccess, tags=$tags, contentUrl=$contentUrl, postsCount=$postsCount, blurHash=$blurHash, id=$id, updated=$updated, contentType=$contentType, longitude=$longitude, ]';
  }

  MoodCreateResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    created =
        json['created']
    ;
    author =
      
      
      new PagedRatedResponsePostAuthor.fromJson(json['author'])
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
      MoodCreateResponsePosts.listFromJson(json['posts'])
;
    content =
        json['content']
    ;
    stakeToAccess =
        json['stakeToAccess']
    ;
    tags =
      PagedRatedResponsePostTags.listFromJson(json['tags'])
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

  static List<MoodCreateResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodCreateResponse>() : json.map((value) => new MoodCreateResponse.fromJson(value)).toList();
  }

  static Map<String, MoodCreateResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodCreateResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodCreateResponse.fromJson(value));
    }
    return map;
  }
}

