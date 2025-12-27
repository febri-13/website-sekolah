export default {
    name: 'berita',
    title: 'Berita',
    type: 'document',
    fields: [
        {
            name: 'judul',
            title: 'Judul Berita',
            type: 'string',
            validation: (Rule:any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'judul',
                maxLength: 96
            },
            validation: (Rule:any) => Rule.required()
        },
        {
            name: 'tanggal',
            title: 'Tanggal Publikasi',
            type: 'datetime',
            validation: (Rule:any) => Rule.required()
        },
        {
            name: 'gambar',
            title: 'Gambar Utama',
            type: 'image',
            options:{
                hotspot: true
            }
        },
        {
            name: 'ringkasan',
            title: 'Ringkasan',
            type: 'text',
            rows: 3
        },
        {
            name: 'konten',
            title: 'Konten Berita',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}