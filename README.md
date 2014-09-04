jquery-fillcontainer
============================================

_Make a child element fill its container. Works with images, video, or any other element._


### Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
aspectRatio | int | null | Element aspect ratio is automatically computed from element size, but you can override this with this option.
parent | string | null | Parent element to conform to. Default is direct parent.
fillMode | string | 'fill' | Choose between 'fill' and 'fit' mode. Fill mode will totally cover the parent element but chil element will be cropped. Fit mode keep child element entirely visible.
continous | bool | true | if true, element will keep filling its container after window resize events. usefull for responsive websites.
offset | int array | [0, 0] | By default the element will be centered inside the container, but you can apply an offset.


### Usage

Simple

        $(<selector>).fillContainer();


With options

        $(<selector>).fillContainer({
            aspectRatio : 1.5,
            parent : '.parent-class'
        });

### License

MIT
