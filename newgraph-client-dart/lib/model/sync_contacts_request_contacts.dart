part of swagger.api;

class SyncContactsRequestContacts {
  
  String birthday = null;
  

  String identifier = null;
  

  String androidAccountName = null;
  

  String displayName = null;
  

  String prefix = null;
  

  String givenName = null;
  

  String jobTitle = null;
  

  List<SyncContactsRequestPhones> phones = [];
  

  String avatar = null;
  

  String suffix = null;
  

  List<SyncContactsRequestPostalAddresses> postalAddresses = [];
  

  List<SyncContactsRequestPhones> emails = [];
  

  String androidAccountType = null;
  

  String familyName = null;
  

  String middleName = null;
  

  String company = null;
  

  String androidAccountTypeRaw = null;
  
  SyncContactsRequestContacts();

  @override
  String toString() {
    return 'SyncContactsRequestContacts[birthday=$birthday, identifier=$identifier, androidAccountName=$androidAccountName, displayName=$displayName, prefix=$prefix, givenName=$givenName, jobTitle=$jobTitle, phones=$phones, avatar=$avatar, suffix=$suffix, postalAddresses=$postalAddresses, emails=$emails, androidAccountType=$androidAccountType, familyName=$familyName, middleName=$middleName, company=$company, androidAccountTypeRaw=$androidAccountTypeRaw, ]';
  }

  SyncContactsRequestContacts.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    birthday =
        json['birthday']
    ;
    identifier =
        json['identifier']
    ;
    androidAccountName =
        json['androidAccountName']
    ;
    displayName =
        json['displayName']
    ;
    prefix =
        json['prefix']
    ;
    givenName =
        json['givenName']
    ;
    jobTitle =
        json['jobTitle']
    ;
    phones =
      SyncContactsRequestPhones.listFromJson(json['phones'])
;
    avatar =
        json['avatar']
    ;
    suffix =
        json['suffix']
    ;
    postalAddresses =
      SyncContactsRequestPostalAddresses.listFromJson(json['postalAddresses'])
;
    emails =
      SyncContactsRequestPhones.listFromJson(json['emails'])
;
    androidAccountType =
        json['androidAccountType']
    ;
    familyName =
        json['familyName']
    ;
    middleName =
        json['middleName']
    ;
    company =
        json['company']
    ;
    androidAccountTypeRaw =
        json['androidAccountTypeRaw']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'birthday': birthday,
      'identifier': identifier,
      'androidAccountName': androidAccountName,
      'displayName': displayName,
      'prefix': prefix,
      'givenName': givenName,
      'jobTitle': jobTitle,
      'phones': phones,
      'avatar': avatar,
      'suffix': suffix,
      'postalAddresses': postalAddresses,
      'emails': emails,
      'androidAccountType': androidAccountType,
      'familyName': familyName,
      'middleName': middleName,
      'company': company,
      'androidAccountTypeRaw': androidAccountTypeRaw
     };
  }

  static List<SyncContactsRequestContacts> listFromJson(List<dynamic> json) {
    return json == null ? new List<SyncContactsRequestContacts>() : json.map((value) => new SyncContactsRequestContacts.fromJson(value)).toList();
  }

  static Map<String, SyncContactsRequestContacts> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, SyncContactsRequestContacts>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new SyncContactsRequestContacts.fromJson(value));
    }
    return map;
  }
}

