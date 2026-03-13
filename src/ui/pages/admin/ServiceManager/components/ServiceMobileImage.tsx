interface Props {
    slug: string | undefined;
    alt: string;
}

export function ServiceMobileImage({ slug, alt }: Readonly<Props>) {
    return <img
        src={`http://localhost:3000/api/resources/images/${slug}`}
        alt={alt}
        className="rounded-xl size-48"
    />
}