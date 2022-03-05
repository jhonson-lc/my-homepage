import {Work as IWork} from "./types";

interface RawWork extends IWork {
  type: "work";
}

class Work implements IWork {
  id: IWork["id"];
  title: IWork["title"];
  thumbnail: IWork["thumbnail"];
  siteurl: IWork["siteurl"];
  build: IWork["build"];
  platform: IWork["platform"];
  description: IWork["description"];

  constructor() {
    this.id = {} as Work["id"];
    this.title = {} as Work["title"];
    this.thumbnail = {} as Work["thumbnail"];
    this.siteurl = {} as Work["siteurl"];
    this.build = {} as Work["build"];
    this.platform = {} as Work["platform"];
    this.description = {} as Work["description"];
  }

  set(work: RawWork) {
    Object.assign(this, {
      id: work.id,
      title: work.title,
      thumbnail: work.thumbnail,
      siteurl: work.siteurl,
      build: work.build,
      platform: work.platform,
      description: work.description,
    });
  }

  toJSON(): IWork {
    const work = {
      id: this.id,
      title: this.title,
      thumbnail: this.thumbnail,
      siteurl: this.siteurl,
      build: this.build,
      platform: this.platform,
      description: this.description,
    };

    return work;
  }
}

function normalize(data: RawWork[]) {
  const works = new Map<RawWork["id"], Work>();

  for (const item of data) {
    if (!works.has(item.id)) {
      works.set(item.id, new Work());
    }
    if (item.type === "work") {
      const work = works.get(item.id);

      work?.set(item);
    }
  }

  const normalized: IWork[] = Object.values(Object.fromEntries(works)).map(
    (product) => product.toJSON(),
  );

  return normalized;
}

export default {
  list: (work: string): Promise<IWork[]> =>
    import(`./works/${work}.json`).then((result) =>
      normalize(result.default as RawWork[]),
    ),
};
