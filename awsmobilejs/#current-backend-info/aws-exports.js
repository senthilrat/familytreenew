// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{"id":"3zi8w87aed","name":"sampleCloudApi","description":"","endpoint":"https://3zi8w87aed.execute-api.us-west-2.amazonaws.com/Development","region":"us-west-2","paths":["/items","/items/123"]},{"id":"zs4ruttkt8","name":"ToDoItemsCRUD","description":"","endpoint":"https://zs4ruttkt8.execute-api.us-west-2.amazonaws.com/Development","region":"us-west-2","paths":["/ToDoItems","/ToDoItems/123"]}],
    'aws_cognito_identity_pool_id': 'us-west-2:9a759b10-dbf8-4a99-bca1-3f9db79ec6c9',
    'aws_cognito_region': 'us-west-2',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'sampleconf-hosting-mobilehub-98262465',
    'aws_content_delivery_bucket_region': 'us-west-2',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'du95kjrxng66d.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'us-west-2',
    'aws_dynamodb_table_schemas': [{"tableName":"sampleconf-mobilehub-98262465-AWSMobileTable","attributes":[{"name":"teamId","type":"S"},{"name":"personId","type":"S"},{"name":"email","type":"S"},{"name":"personName","type":"S"},{"name":"phone","type":"S"}],"indexes":[{"indexName":"personName-index","hashKey":"teamId","rangeKey":"personName"}],"region":"us-west-2","hashKey":"teamId","rangeKey":"personId"},{"tableName":"sampleconf-mobilehub-98262465-ToDoItems","attributes":[{"name":"userId","type":"S"},{"name":"items","type":"L"}],"indexes":[],"region":"us-west-2","hashKey":"userId"}],
    'aws_mobile_analytics_app_id': '2c06a2383f2a4c49bad18c1c8107a39f',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': '4d341013-d6c8-4eae-86a4-5b39c9ecd263',
    'aws_project_name': 'sample-conf',
    'aws_project_region': 'us-west-2',
    'aws_resource_bucket_name': 'sampleconf-deployments-mobilehub-98262465',
    'aws_resource_name_prefix': 'sampleconf-mobilehub-98262465',
    'aws_sign_in_enabled': 'enable',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-west-2_vOzj9NSPt',
    'aws_user_pools_mfa_type': 'ON',
    'aws_user_pools_web_client_id': '2n7lm87as1nq6rk69og1mktoqq',
}

export default awsmobile;
