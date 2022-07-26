/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ImageDerivativeSize = "HERO" | "LARGE" | "MEDIUM" | "SANS_TEXT" | "SMALL" | "THUMB" | "WITH_TEXT" | "%future added value";
export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
export type InstallationLogoFragment = {
    readonly site: {
        readonly installationName: string;
        readonly logoMode: SiteLogoMode;
    };
    readonly logo: {
        readonly storage: AttachmentStorage | null;
        readonly original: {
            readonly originalFilename: string | null;
            readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
        };
        readonly sansText: {
            readonly size: ImageDerivativeSize;
            readonly webp: {
                readonly width: number | null;
                readonly height: number | null;
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
    };
    readonly " $refType": "InstallationLogoFragment";
};
export type InstallationLogoFragment$data = InstallationLogoFragment;
export type InstallationLogoFragment$key = {
    readonly " $data"?: InstallationLogoFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstallationLogoFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ImageFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstallationLogoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteSettings",
      "kind": "LinkedField",
      "name": "site",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "installationName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "logoMode",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteLogoAttachment",
      "kind": "LinkedField",
      "name": "logo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "storage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageOriginal",
          "kind": "LinkedField",
          "name": "original",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "originalFilename",
              "storageKey": null
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "sansText",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "size",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "width",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "height",
                  "storageKey": null
                },
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GlobalConfiguration",
  "abstractKey": null
};
})();
(node as any).hash = 'cef254b3b342f0e6b157990bd0b88ab9';
export default node;
