part of swagger.api;

class PagedRatedResponsePostValue {
  
  String coverContentUrl = null;
  

  String moodId = null;
  

  String created = null;
  

  PagedRatedResponsePostAuthor author = null;
  

  num latitude = null;
  

  List<PagedRatedResponsePostMoods> moods = [];
  

  PagedRatedResponseUserRating rating = null;
  

  String description = null;
  

  num aspectRatio = null;
  

  String title = null;
  

  String content = null;
  

  List<PagedRatedResponsePostTags> tags = [];
  

  String license = null;
  

  String contentUrl = null;
  

  String blurHash = null;
  

  String newcoinMintTx = null;
  

  String id = null;
  

  String consentEmail = null;
  

  String updated = null;
  

  String contentType = null;
  

  num longitude = null;
  
  PagedRatedResponsePostValue();

  @override
  String toString() {
    return 'PagedRatedResponsePostValue[coverContentUrl=$coverContentUrl, moodId=$moodId, created=$created, author=$author, latitude=$latitude, moods=$moods, rating=$rating, description=$description, aspectRatio=$aspectRatio, title=$title, content=$content, tags=$tags, license=$license, contentUrl=$contentUrl, blurHash=$blurHash, newcoinMintTx=$newcoinMintTx, id=$id, consentEmail=$consentEmail, updated=$updated, contentType=$contentType, longitude=$longitude, ]';
  }

  PagedRatedResponsePostValue.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    coverContentUrl =
        json['coverContentUrl']
    ;
    moodId =
        json['moodId']
    ;
    created =
        json['created']
    ;
    author =
      
      
      new PagedRatedResponsePostAuthor.fromJson(json['author'])
;
    latitude =
        json['latitude']
    ;
    moods =
      PagedRatedResponsePostMoods.listFromJson(json['moods'])
;
    rating =
      
      
      new PagedRatedResponseUserRating.fromJson(json['rating'])
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
    tags =
      PagedRatedResponsePostTags.listFromJson(json['tags'])
;
    license =
        json['license']
    ;
    contentUrl =
        json['contentUrl']
    ;
    blurHash =
        json['blurHash']
    ;
    newcoinMintTx =
        json['newcoinMintTx']
    ;
    id =
        json['id']
    ;
    consentEmail =
        json['consentEmail']
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
      'coverContentUrl': coverContentUrl,
      'moodId': moodId,
      'created': created,
      'author': author,
      'latitude': latitude,
      'moods': moods,
      'rating': rating,
      'description': description,
      'aspectRatio': aspectRatio,
      'title': title,
      'content': content,
      'tags': tags,
      'license': license,
      'contentUrl': contentUrl,
      'blurHash': blurHash,
      'newcoinMintTx': newcoinMintTx,
      'id': id,
      'consentEmail': consentEmail,
      'updated': updated,
      'contentType': contentType,
      'longitude': longitude
     };
  }

  static List<PagedRatedResponsePostValue> listFromJson(List<dynamic> json) {
    return json == null ? new List<PagedRatedResponsePostValue>() : json.map((value) => new PagedRatedResponsePostValue.fromJson(value)).toList();
  }

  static Map<String, PagedRatedResponsePostValue> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PagedRatedResponsePostValue>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PagedRatedResponsePostValue.fromJson(value));
    }
    return map;
  }
}

