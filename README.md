jquery.fillcontainer
============================================

_Make a child element fill its container. Works with images, video, or any other element._


### Usage

        $(<selector>).fillContainer();

### Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
aspectRatio | int | 1 | Element aspect ratio is automatically computed from element size, but you can override this with this option.
parent | string | $(<selector>).parent() | Parent element to conform to. Default is direct parent.


#### Example
        $(<selector>).fillContainer({
            aspectRatio : 1.5,
            parent : '.parent-class'
        });



### License

MIT
