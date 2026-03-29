function transform(input) {
  const source0 = input?.IDX_0 || {};
  const source1 = input?.IDX_1 || {};
  const source2 = input?.IDX_2 || {};
  const source3 = input?.IDX_3 || {};

  const mapStatuses = (statuses) =>
    (statuses || [])
      .map((status) => ({
        media_attachments: [
          {
            preview_url: status?.media_attachments?.[0]?.preview_url,
          },
        ],
      }))
      .filter((status) => status.media_attachments[0].preview_url)
      .slice(0, 12);

  return {
    IDX_0: {
      data: {
        uri: source0?.data?.uri,
        title: source0?.data?.title,
      },
    },
    IDX_1: {
      username: source1?.username,
      display_name: source1?.display_name,
    },
    IDX_2: {
      data: mapStatuses(source2?.data),
    },
    IDX_3: {
      data: mapStatuses(source3?.data),
    },
  };
}
