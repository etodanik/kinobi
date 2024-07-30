import type { CamelCaseString, ImportFrom } from '../shared';
import { ProgramLinkNode } from './ProgramLinkNode';

export interface PdaLinkNode <TProgram extends ProgramLinkNode | undefined = ProgramLinkNode | undefined> {
    readonly kind: 'pdaLinkNode';

    // Data.
    readonly name: CamelCaseString;
    readonly importFrom?: ImportFrom;
    readonly program?: TProgram;
}
