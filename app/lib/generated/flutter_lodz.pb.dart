///
//  Generated code. Do not modify.
//  source: flutter_lodz.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class StateManagementProposal extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StateManagementProposal', createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  StateManagementProposal._() : super();
  factory StateManagementProposal({
    $core.String? name,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory StateManagementProposal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StateManagementProposal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StateManagementProposal clone() => StateManagementProposal()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StateManagementProposal copyWith(void Function(StateManagementProposal) updates) => super.copyWith((message) => updates(message as StateManagementProposal)) as StateManagementProposal; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StateManagementProposal create() => StateManagementProposal._();
  StateManagementProposal createEmptyInstance() => create();
  static $pb.PbList<StateManagementProposal> createRepeated() => $pb.PbList<StateManagementProposal>();
  @$core.pragma('dart2js:noInline')
  static StateManagementProposal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StateManagementProposal>(create);
  static StateManagementProposal? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);
}

class StateManagement extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StateManagement', createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rating', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  StateManagement._() : super();
  factory StateManagement({
    $core.String? id,
    $core.String? name,
    $core.int? rating,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (name != null) {
      _result.name = name;
    }
    if (rating != null) {
      _result.rating = rating;
    }
    return _result;
  }
  factory StateManagement.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StateManagement.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StateManagement clone() => StateManagement()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StateManagement copyWith(void Function(StateManagement) updates) => super.copyWith((message) => updates(message as StateManagement)) as StateManagement; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StateManagement create() => StateManagement._();
  StateManagement createEmptyInstance() => create();
  static $pb.PbList<StateManagement> createRepeated() => $pb.PbList<StateManagement>();
  @$core.pragma('dart2js:noInline')
  static StateManagement getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StateManagement>(create);
  static StateManagement? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get rating => $_getIZ(2);
  @$pb.TagNumber(3)
  set rating($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasRating() => $_has(2);
  @$pb.TagNumber(3)
  void clearRating() => clearField(3);
}

class ListStateManagementsRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ListStateManagementsRequest', createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  ListStateManagementsRequest._() : super();
  factory ListStateManagementsRequest() => create();
  factory ListStateManagementsRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ListStateManagementsRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ListStateManagementsRequest clone() => ListStateManagementsRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ListStateManagementsRequest copyWith(void Function(ListStateManagementsRequest) updates) => super.copyWith((message) => updates(message as ListStateManagementsRequest)) as ListStateManagementsRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ListStateManagementsRequest create() => ListStateManagementsRequest._();
  ListStateManagementsRequest createEmptyInstance() => create();
  static $pb.PbList<ListStateManagementsRequest> createRepeated() => $pb.PbList<ListStateManagementsRequest>();
  @$core.pragma('dart2js:noInline')
  static ListStateManagementsRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ListStateManagementsRequest>(create);
  static ListStateManagementsRequest? _defaultInstance;
}

class ListStateManagementsResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ListStateManagementsResponse', createEmptyInstance: create)
    ..pc<StateManagement>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'stateManagements', $pb.PbFieldType.PM, subBuilder: StateManagement.create)
    ..hasRequiredFields = false
  ;

  ListStateManagementsResponse._() : super();
  factory ListStateManagementsResponse({
    $core.Iterable<StateManagement>? stateManagements,
  }) {
    final _result = create();
    if (stateManagements != null) {
      _result.stateManagements.addAll(stateManagements);
    }
    return _result;
  }
  factory ListStateManagementsResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ListStateManagementsResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ListStateManagementsResponse clone() => ListStateManagementsResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ListStateManagementsResponse copyWith(void Function(ListStateManagementsResponse) updates) => super.copyWith((message) => updates(message as ListStateManagementsResponse)) as ListStateManagementsResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ListStateManagementsResponse create() => ListStateManagementsResponse._();
  ListStateManagementsResponse createEmptyInstance() => create();
  static $pb.PbList<ListStateManagementsResponse> createRepeated() => $pb.PbList<ListStateManagementsResponse>();
  @$core.pragma('dart2js:noInline')
  static ListStateManagementsResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ListStateManagementsResponse>(create);
  static ListStateManagementsResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<StateManagement> get stateManagements => $_getList(0);
}

