part of swagger.api;

class PostCreateResponseMoods {
  
  String created = null;
  

  PostCreateResponseAuthor author = null;
  

  num latitude = null;
  

  String description = null;
  

  num aspectRatio = null;
  

  String title = null;
  

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
  
  PostCreateResponseMoods();

  @override
  String toString() {
    return 'PostCreateResponseMoods[created=$created, author=$author, latitude=$latitude, description=$description, aspectRatio=$aspectRatio, title=$title, content=$content, stakeToAccess=$stakeToAccess, tags=$tags, contentUrl=$contentUrl, postsCount=$postsCount, blurHash=$blurHash, id=$id, updated=$updated, contentType=$contentType, longitude=$longitude, ]';
  }

  PostCreateResponseMoods.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    created =
        json['created']
    ;
    author =
      
      
      new PostCreateResponseAuthor.fromJson(json['author'])
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

  static List<PostCreateResponseMoods> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostCreateResponseMoods>() : json.map((value) => new PostCreateResponseMoods.fromJson(value)).toList();
  }

  static Map<String, PostCreateResponseMoods> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostCreateResponseMoods>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostCreateResponseMoods.fromJson(value));
    }
    return map;
  }
}

