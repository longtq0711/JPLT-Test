var contentEditor;
tinymce.init({ 
    selector:'#content',
    content_css: [
        "/css/style-editor.css?v=1.0.5",
    ],
    height: 500,
    plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor colorpicker textpattern codesample toc",
        "paste",
      ],
      toolbar:
        "cut copy wordcount" +
        "| undo redo" +
        "| bold italic underline strikethrough" +
        "| forecolor backcolor" +
        // "| fontsizeselect formatselect" +
        "| bullist numlist " +
        "| blockquote hr pagebreak" +
        "| alignleft aligncenter alignright alignjustify" +
        "| outdent indent" +
        "| ltr rtl" +
        "| link unlink image media" +
        "| table removeformat charmap" +
        "| code fullscreen preview print ",
    menubar: false,
    setup: function (editor) {
        contentEditor = editor;
    },
    image_dimensions: false, // không cho phép sửa width và height của hình ảnh
    media_dimensions: false, // không cho phép sửa width và height của media
    fontsize_formats: "8px 10px 12px 14px 16px 18px 24px 36px 38px 40px",
    relative_urls: false,
    remove_script_host: false,
    paste_auto_cleanup_on_paste: true,
    paste_remove_styles: true, // Xóa Style
    paste_remove_styles_if_webkit: true, // Xóa Style
    paste_strip_class_attributes: true,
    branding: false,
    convert_urls: false, // bỏ tự động thêm domain vào url
    paste_preprocess: function(plugin, args) {
        // Xóa class và id trong element khi paste
        args.content = args.content.replace(/ id="(.*?)"/ig, "").replace(/ class="(.*?)"/ig, "");
    },
    media_url_resolver: function (data, resolve) {
        // if (data.url.indexOf('YOUR_SPECIAL_VIDEO_URL') !== -1) {
            videoId = getIdYoutube(data.url);
            var embedHtml = '<div class="youtube-iframe-url" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;"><iframe src="//www.youtube.com/embed/' + videoId +'" style="position: absolute;top: 0;left: 0;width: 100%; height: 100%;" ></iframe></div>';
            resolve({html: embedHtml});
        // } else {
        //   resolve({html: ''});
        // }
    }
});

function getIdYoutube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}
