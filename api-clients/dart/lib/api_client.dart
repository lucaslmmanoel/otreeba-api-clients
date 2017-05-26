part of swagger.api;

class QueryParam {
  String name;
  String value;

  QueryParam(this.name, this.value);
}

class ApiClient {

  String basePath;
  var client = new BrowserClient();

  Map<String, String> _defaultHeaderMap = {};
  Map<String, Authentication> _authentications = {};

  final dson = new Dartson.JSON()
                   ..addTransformer(new DateTimeParser(), DateTime);

  final _RegList = new RegExp(r'^List<(.*)>$');
  final _RegMap = new RegExp(r'^Map<String,(.*)>$');

  ApiClient({this.basePath: "https://api.otreeba.com/v1"}) {
    // Setup authentications (key: authentication name, value: authentication).
  }

  void addDefaultHeader(String key, String value) {
     _defaultHeaderMap[key] = value;
  }

  dynamic _deserialize(dynamic value, String targetType) {
    try {
      switch (targetType) {
        case 'String':
          return '$value';
        case 'int':
          return value is int ? value : int.parse('$value');
        case 'bool':
          return value is bool ? value : '$value'.toLowerCase() == 'true';
        case 'double':
          return value is double ? value : double.parse('$value');
        case 'Brand':
          return dson.map(value, new Brand());
        case 'Edible':
          return dson.map(value, new Edible());
        case 'Error':
          return dson.map(value, new Error());
        case 'Extract':
          return dson.map(value, new Extract());
        case 'Flower':
          return dson.map(value, new Flower());
        case 'InlineResponse200':
          return dson.map(value, new InlineResponse200());
        case 'InlineResponse2001':
          return dson.map(value, new InlineResponse2001());
        case 'InlineResponse20010':
          return dson.map(value, new InlineResponse20010());
        case 'InlineResponse20010Meta':
          return dson.map(value, new InlineResponse20010Meta());
        case 'InlineResponse20011':
          return dson.map(value, new InlineResponse20011());
        case 'InlineResponse20011Meta':
          return dson.map(value, new InlineResponse20011Meta());
        case 'InlineResponse2001Meta':
          return dson.map(value, new InlineResponse2001Meta());
        case 'InlineResponse2002':
          return dson.map(value, new InlineResponse2002());
        case 'InlineResponse2002Meta':
          return dson.map(value, new InlineResponse2002Meta());
        case 'InlineResponse2003':
          return dson.map(value, new InlineResponse2003());
        case 'InlineResponse2003Meta':
          return dson.map(value, new InlineResponse2003Meta());
        case 'InlineResponse2004':
          return dson.map(value, new InlineResponse2004());
        case 'InlineResponse2004Meta':
          return dson.map(value, new InlineResponse2004Meta());
        case 'InlineResponse2005':
          return dson.map(value, new InlineResponse2005());
        case 'InlineResponse2005Meta':
          return dson.map(value, new InlineResponse2005Meta());
        case 'InlineResponse2006':
          return dson.map(value, new InlineResponse2006());
        case 'InlineResponse2006Meta':
          return dson.map(value, new InlineResponse2006Meta());
        case 'InlineResponse2007':
          return dson.map(value, new InlineResponse2007());
        case 'InlineResponse2007Meta':
          return dson.map(value, new InlineResponse2007Meta());
        case 'InlineResponse2008':
          return dson.map(value, new InlineResponse2008());
        case 'InlineResponse2008Meta':
          return dson.map(value, new InlineResponse2008Meta());
        case 'InlineResponse2009':
          return dson.map(value, new InlineResponse2009());
        case 'InlineResponse2009Meta':
          return dson.map(value, new InlineResponse2009Meta());
        case 'InlineResponse200Meta':
          return dson.map(value, new InlineResponse200Meta());
        case 'Pagination':
          return dson.map(value, new Pagination());
        case 'Product':
          return dson.map(value, new Product());
        case 'SeedCompany':
          return dson.map(value, new SeedCompany());
        case 'Strain':
          return dson.map(value, new Strain());
        default:
          {
            Match match;
            if (value is List &&
                (match = _RegList.firstMatch(targetType)) != null) {
              var newTargetType = match[1];
              return value.map((v) => _deserialize(v, newTargetType)).toList();
            } else if (value is Map &&
                (match = _RegMap.firstMatch(targetType)) != null) {
              var newTargetType = match[1];
              return new Map.fromIterables(value.keys,
                  value.values.map((v) => _deserialize(v, newTargetType)));
            }
          }
      }
    } catch (e, stack) {
      throw new ApiException.withInner(500, 'Exception during deserialization.', e, stack);
    }
    throw new ApiException(500, 'Could not find a suitable class for deserialization');
  }

  dynamic deserialize(String json, String targetType) {
    // Remove all spaces.  Necessary for reg expressions as well.
    targetType = targetType.replaceAll(' ', '');

    if (targetType == 'String') return json;

    var decodedJson = JSON.decode(json);
    return _deserialize(decodedJson, targetType);
  }

  String serialize(Object obj) {
    String serialized = '';
    if (obj == null) {
      serialized = '';
    } else if (obj is String) {
      serialized = obj;
    } else {
      serialized = dson.encode(obj);
    }
    return serialized;
  }

  // We don't use a Map<String, String> for queryParams.
  // If collectionFormat is 'multi' a key might appear multiple times.
  Future<Response> invokeAPI(String path,
                             String method,
                             Iterable<QueryParam> queryParams,
                             Object body,
                             Map<String, String> headerParams,
                             Map<String, String> formParams,
                             String contentType,
                             List<String> authNames) async {

    _updateParamsForAuth(authNames, queryParams, headerParams);

    var ps = queryParams.where((p) => p.value != null).map((p) => '${p.name}=${p.value}');
    String queryString = ps.isNotEmpty ?
                         '?' + ps.join('&') :
                         '';

    String url = basePath + path + queryString;

    headerParams.addAll(_defaultHeaderMap);
    headerParams['Content-Type'] = contentType;

    if(body is MultipartRequest) {
      var request = new MultipartRequest(method, Uri.parse(url));      
      request.fields.addAll(body.fields);
      request.files.addAll(body.files);
      request.headers.addAll(body.headers);
      request.headers.addAll(headerParams);
      var response = await client.send(request);
      return Response.fromStream(response);
    } else {
      var msgBody = contentType == "application/x-www-form-urlencoded" ? formParams : serialize(body);
      switch(method) {
        case "POST":
          return client.post(url, headers: headerParams, body: msgBody);
        case "PUT":
          return client.put(url, headers: headerParams, body: msgBody);
        case "DELETE":
          return client.delete(url, headers: headerParams);
        case "PATCH":
          return client.patch(url, headers: headerParams, body: msgBody);
        default:
          return client.get(url, headers: headerParams);
      }
    }
  }

  /// Update query and header parameters based on authentication settings.
  /// @param authNames The authentications to apply  
  void _updateParamsForAuth(List<String> authNames, List<QueryParam> queryParams, Map<String, String> headerParams) {
    authNames.forEach((authName) {
      Authentication auth = _authentications[authName];
      if (auth == null) throw new ArgumentError("Authentication undefined: " + authName);
      auth.applyToParams(queryParams, headerParams);
    });
  }
}