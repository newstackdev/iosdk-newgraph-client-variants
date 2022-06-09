part of swagger.api;

class PostPagedListReadPublicResponseValue {
  
  String coverContentUrl = null;
  

  String moodId = null;
  

  String created = null;
  

  PostCreateResponseAuthor author = null;
  

  num latitude = null;
  

  List<PostCreateResponseMoods> moods = [];
  

  String description = null;
  

  num aspectRatio = null;
  

  String title = null;
  

  String content = null;
  

  List<MoodPagedListReadPublicResponseTags> tags = [];
  

  String license = null;
  

  String contentUrl = null;
  

  String blurHash = null;
  

  String newcoinMintTx = null;
  

  String id = null;
  

  String embed = null;
  

  String updated = null;
  

  String contentType = null;
  

  num longitude = null;
  
  PostPagedListReadPublicResponseValue();

  @override
  String toString() {
    return 'PostPagedListReadPublicResponseValue[coverContentUrl=$coverContentUrl, moodId=$moodId, created=$created, author=$author, latitude=$latitude, moods=$moods, description=$description, aspectRatio=$aspectRatio, title=$title, content=$content, tags=$tags, license=$license, contentUrl=$contentUrl, blurHash=$blurHash, newcoinMintTx=$newcoinMintTx, id=$id, embed=$embed, updated=$updated, contentType=$contentType, longitude=$longitude, ]';
  }

  PostPagedListReadPublicResponseValue.fromJson(Map<String, dynamic> json) {
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
      
      
      new PostCreateResponseAuthor.fromJson(json['author'])
;
    latitude =
        json['latitude']
    ;
    moods =
      PostCreateResponseMoods.listFromJson(json['moods'])
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
      MoodPagedListReadPublicResponseTags.listFromJson(json['tags'])
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
    embed =
        json['embed']
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
      'embed': embed,
      'updated': updated,
      'contentType': contentType,
      'longitude': longitude
     };
  }

  static List<PostPagedListReadPublicResponseValue> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostPagedListReadPublicResponseValue>() : json.map((value) => new PostPagedListReadPublicResponseValue.fromJson(value)).toList();
  }

  static Map<String, PostPagedListReadPublicResponseValue> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostPagedListReadPublicResponseValue>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostPagedListReadPublicResponseValue.fromJson(value));
    }
    return map;
  }
}

