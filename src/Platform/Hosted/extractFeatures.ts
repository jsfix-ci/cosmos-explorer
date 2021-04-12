export type Features = {
  readonly canExceedMaximumValue: boolean;
  readonly cosmosdb: boolean;
  readonly enableChangeFeedPolicy: boolean;
  readonly enableFixedCollectionWithSharedThroughput: boolean;
  readonly enableKOPanel: boolean;
  readonly enableNotebooks: boolean;
  readonly enableReactPane: boolean;
  readonly enableRightPanelV2: boolean;
  readonly enableSchema: boolean;
  readonly enableSDKoperations: boolean;
  readonly enableSpark: boolean;
  readonly enableTtl: boolean;
  readonly executeSproc: boolean;
  readonly hostedDataExplorer: boolean;
  readonly livyEndpoint?: string;
  readonly notebookBasePath?: string;
  readonly notebookServerToken?: string;
  readonly notebookServerUrl?: string;
  readonly sandboxNotebookOutputs: boolean;
  readonly selfServeType?: string;
  readonly pr?: string;
  readonly showMinRUSurvey: boolean;
  readonly ttl90Days: boolean;
};

export function extractFeatures(given = new URLSearchParams()): Features {
  const downcased = new URLSearchParams();
  const set = (value: string, key: string) => downcased.set(key.toLowerCase(), value);
  const get = (key: string) => downcased.get("feature." + key) ?? undefined;

  try {
    new URLSearchParams(window.parent.location.search).forEach(set);
  } catch {
    //
  } finally {
    given.forEach(set);
  }

  return {
    canExceedMaximumValue: "true" === get("canexceedmaximumvalue"),
    cosmosdb: "true" === get("cosmosdb"),
    enableChangeFeedPolicy: "true" === get("enablechangefeedpolicy"),
    enableFixedCollectionWithSharedThroughput: "true" === get("enablefixedcollectionwithsharedthroughput"),
    enableKOPanel: "true" === get("enablekopanel"),
    enableNotebooks: "true" === get("enablenotebooks"),
    enableReactPane: "true" === get("enablereactpane"),
    enableRightPanelV2: "true" === get("enablerightpanelv2"),
    enableSchema: "true" === get("enableschema"),
    enableSDKoperations: "true" === get("enablesdkoperations"),
    enableSpark: "true" === get("enablespark"),
    enableTtl: "true" === get("enablettl"),
    executeSproc: "true" === get("dataexplorerexecutesproc"),
    hostedDataExplorer: "true" === get("hosteddataexplorerenabled"),
    livyEndpoint: get("livyendpoint"),
    notebookBasePath: get("notebookbasepath"),
    notebookServerToken: get("notebookservertoken"),
    notebookServerUrl: get("notebookserverurl"),
    sandboxNotebookOutputs: "true" === get("sandboxnotebookoutputs"),
    selfServeType: get("selfservetype"),
    pr: get("pr"),
    showMinRUSurvey: "true" === get("showminrusurvey"),
    ttl90Days: "true" === get("ttl90days"),
  };
}
