/**
 * Emits a schema.org JSON-LD block.
 *
 * Rendered server-side into the static HTML so crawlers and AI agents see it
 * without executing JavaScript — many do not run JS at all.
 */
const JsonLd = ({ data }: { data: object }) => (
    <script
        type="application/ld+json"
        // JSON.stringify output is not HTML; the only character that can break
        // out of a <script> block is "<", so escape it.
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
    />
);

export default JsonLd;
