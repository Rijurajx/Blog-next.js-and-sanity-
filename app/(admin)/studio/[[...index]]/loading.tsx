'use client'

import { NextStudioLoading } from 'next-sanity/studio/loading';

import config from '../../../../sanity.config';

export default function Loading() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
    return <NextStudioLoading config={config} />;
}