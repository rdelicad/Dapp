import { Buffer } from 'buffer'

/** eslint-disable @typescript-eslint/no-explicit-any */
(window as any).global = window;
(window as any).global.Buffer = Buffer;
(window as any).process = { env: {} };
