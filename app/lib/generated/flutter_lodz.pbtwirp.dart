//
//  Generated code. Do not modify.
//  source: flutter_lodz.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:twirpd/twirpd.dart' as $twirp;
import 'flutter_lodz.pb.dart' as $0;
export 'flutter_lodz.pb.dart';

class FlutterLodzClient extends $twirp.Client {
  static final _$proposeStateManagement =
      $twirp.ClientMethod<$0.StateManagementProposal, $0.StateManagement>(
          '/FlutterLodz/ProposeStateManagement',
          ($0.StateManagementProposal value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.StateManagement.fromBuffer(value));
  static final _$listStateManagements = $twirp.ClientMethod<
          $0.ListStateManagementsRequest, $0.ListStateManagementsResponse>(
      '/FlutterLodz/ListStateManagements',
      ($0.ListStateManagementsRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.ListStateManagementsResponse.fromBuffer(value));

  FlutterLodzClient(
    $core.String host, {
    $core.int port = 443,
    $twirp.ClientOptions? options,
    $core.Iterable<$twirp.ClientInterceptor>? interceptors,
  }) : super(host, port: port, options: options, interceptors: interceptors);

  $async.Future<$0.StateManagement> proposeStateManagement(
      $0.StateManagementProposal request,
      {$twirp.CallOptions? options}) {
    return $call(_$proposeStateManagement, request, options: options);
  }

  $async.Future<$0.ListStateManagementsResponse> listStateManagements(
      $0.ListStateManagementsRequest request,
      {$twirp.CallOptions? options}) {
    return $call(_$listStateManagements, request, options: options);
  }
}
