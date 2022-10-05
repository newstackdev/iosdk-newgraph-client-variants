part of swagger.api;

class BcListDaoProposalsResponseRows {
  
  String summary = null;
  

  String proposer = null;
  

  String voteStart = null;
  

  bool more = null;
  

  String nextKey = null;
  

  String voteEnd = null;
  

  num id = null;
  

  String title = null;
  

  BcListDaoProposalsResponseVoteNo voteNo = null;
  

  String url = null;
  

  BcListDaoProposalsResponseVoteNo voteYes = null;
  

  String status = null;
  
  BcListDaoProposalsResponseRows();

  @override
  String toString() {
    return 'BcListDaoProposalsResponseRows[summary=$summary, proposer=$proposer, voteStart=$voteStart, more=$more, nextKey=$nextKey, voteEnd=$voteEnd, id=$id, title=$title, voteNo=$voteNo, url=$url, voteYes=$voteYes, status=$status, ]';
  }

  BcListDaoProposalsResponseRows.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    summary =
        json['summary']
    ;
    proposer =
        json['proposer']
    ;
    voteStart =
        json['vote_start']
    ;
    more =
        json['more']
    ;
    nextKey =
        json['next_key']
    ;
    voteEnd =
        json['vote_end']
    ;
    id =
        json['id']
    ;
    title =
        json['title']
    ;
    voteNo =
      
      
      new BcListDaoProposalsResponseVoteNo.fromJson(json['vote_no'])
;
    url =
        json['url']
    ;
    voteYes =
      
      
      new BcListDaoProposalsResponseVoteNo.fromJson(json['vote_yes'])
;
    status =
        json['status']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'summary': summary,
      'proposer': proposer,
      'vote_start': voteStart,
      'more': more,
      'next_key': nextKey,
      'vote_end': voteEnd,
      'id': id,
      'title': title,
      'vote_no': voteNo,
      'url': url,
      'vote_yes': voteYes,
      'status': status
     };
  }

  static List<BcListDaoProposalsResponseRows> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcListDaoProposalsResponseRows>() : json.map((value) => new BcListDaoProposalsResponseRows.fromJson(value)).toList();
  }

  static Map<String, BcListDaoProposalsResponseRows> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcListDaoProposalsResponseRows>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcListDaoProposalsResponseRows.fromJson(value));
    }
    return map;
  }
}

