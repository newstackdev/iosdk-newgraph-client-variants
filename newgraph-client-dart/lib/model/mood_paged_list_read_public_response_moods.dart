part of swagger.api;

class MoodPagedListReadPublicResponseMoods {
  
  String created = null;
  

  MoodPagedListReadPublicResponseAuthor author = null;
  

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
  
  MoodPagedListReadPublicResponseMoods();

  @override
  String toString() {
    return 'MoodPagedListReadPublicResponseMoods[created=$created, author=$author, latitude=$latitude, description=$description, aspectRatio=$aspectRatio, title=$title, content=$content, stakeToAccess=$stakeToAccess, tags=$tags, contentUrl=$contentUrl, postsCount=$postsCount, blurHash=$blurHash, id=$id, updated=$updated, contentType=$contentType, longitude=$longitude, ]';
  }

  MoodPagedListReadPublicResponseMoods.fromJson(Map<String, dynamic> json) {
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

  static List<MoodPagedListReadPublicResponseMoods> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodPagedListReadPublicResponseMoods>() : json.map((value) => new MoodPagedListReadPublicResponseMoods.fromJson(value)).toList();
  }

  static Map<String, MoodPagedListReadPublicResponseMoods> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodPagedListReadPublicResponseMoods>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodPagedListReadPublicResponseMoods.fromJson(value));
    }
    return map;
  }
}

