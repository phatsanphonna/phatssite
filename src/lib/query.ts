export interface Project {
  _rev: string;
  _type: string;
  links: Link[];
  _id: string;
  _updatedAt: string;
  stacks: string[];
  _createdAt: string;
  description: string;
  title: string;
}

export interface Link {
  icon: string;
  _key: string;
  url: string;
}

export const getProjects = async () => {
  try {
    const response = await fetch(
      `https://kvcu3jcb.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22project%22%5D`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CMS_API_KEY}`,
        },
      }
    );

    const data = (await response.json()) as {
      query: string;
      result: Project[];
    };

    return data.result.sort(
      (a, b) =>
        new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
    );
  } catch (error) {
    console.error(error);
    return [];
  }
};
