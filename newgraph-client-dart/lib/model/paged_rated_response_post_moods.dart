part of swagger.api;

class PagedRatedResponsePostMoods {
  
  String created = null;
  

  PagedRatedResponsePostAuthor author = null;
  

  num latitude = null;
  

  String description = null;
  

  num aspectRatio = null;
  

  String title = null;
  

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
  
  PagedRatedResponsePostMoods();

  @override
  String toString() {
    return 'PagedRatedResponsePostMoods[created=$created, author=$author, latitude=$latitude, description=$description, aspectRatio=$aspectRatio, title=$title, content=$content, stakeToAccess=$stakeToAccess, tags=$tags, contentUrl=$contentUrl, postsCount=$postsCount, blurHash=$blurHash, id=$id, updated=$updated, contentType=$contentType, longitude=$longitude, ]';
  }

  PagedRatedResponsePostMoods.fromJson(Map<String, dynamic> json) {
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

  static List<PagedRatedResponsePostMoods> listFromJson(List<dynamic> json) {
    return json == null ? new List<PagedRatedResponsePostMoods>() : json.map((value) => new PagedRatedResponsePostMoods.fromJson(value)).toList();
  }

  static Map<String, PagedRatedResponsePostMoods> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PagedRatedResponsePostMoods>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PagedRatedResponsePostMoods.fromJson(value));
    }
    return map;
  }
}

