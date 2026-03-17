import { API_URL } from "@/core/config/environment";
import { useEffect, useState } from "react";
import placeholder from "@/assets/placeholder-image.webp";

interface Props {
    slug: string | undefined;
    alt: string;
}

export function ServiceMobileImage({ slug, alt }: Readonly<Props>) {
    const [isValid, setIsValid] = useState(false);

    const getImage = () => {
        if (!isValid || !slug) {
            return placeholder;
        }

        return `${API_URL}/resources/images/${slug}`
    }

    useEffect(() => {
        fetch(`${API_URL}/resources/images/${slug}`)
            .then(async (res) => {
                if (res.status !== 200) {
                    setIsValid(false)
                }
                setIsValid(true)
            })
            .catch(() => {
                setIsValid(false)
            })
    }, [slug])
    return <img
        src={getImage()}
        alt={alt}
        className="rounded-xl size-48"
    />
}