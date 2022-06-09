part of swagger.api;

class BcCreateDaoProposal {
  
  String summary = null;
  

  String voteStart = null;
  

  String daoId = null;
  

  String daoOwner = null;
  

  String voteEnd = null;
  

  String title = null;
  

  String url = null;
  
  BcCreateDaoProposal();

  @override
  String toString() {
    return 'BcCreateDaoProposal[summary=$summary, voteStart=$voteStart, daoId=$daoId, daoOwner=$daoOwner, voteEnd=$voteEnd, title=$title, url=$url, ]';
  }

  BcCreateDaoProposal.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    summary =
        json['summary']
    ;
    voteStart =
        json['vote_start']
    ;
    daoId =
        json['dao_id']
    ;
    daoOwner =
        json['dao_owner']
    ;
    voteEnd =
        json['vote_end']
    ;
    title =
        json['title']
    ;
    url =
        json['url']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'summary': summary,
      'vote_start': voteStart,
      'dao_id': daoId,
      'dao_owner': daoOwner,
      'vote_end': voteEnd,
      'title': title,
      'url': url
     };
  }

  static List<BcCreateDaoProposal> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcCreateDaoProposal>() : json.map((value) => new BcCreateDaoProposal.fromJson(value)).toList();
  }

  static Map<String, BcCreateDaoProposal> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcCreateDaoProposal>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcCreateDaoProposal.fromJson(value));
    }
    return map;
  }
}

