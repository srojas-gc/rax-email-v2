import API from '@aws-amplify/api';
import '@aws-amplify/ui-vue';
import aws_exports from '../src/aws-exports';

API.configure(aws_exports);