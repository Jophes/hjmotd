var dropdownBars = [], containers = [], heights = [], tarHeights = [], maxHeights = [];

function updateContainerHeights() {
    for (var i = 0; i < dropdownBars.length; i++)
    {
        tarHeights[i] = (dropdownBars[i].className.includes(' hidden') ? 0 : maxHeights[i]);
        heights[i] = (heights[i] + (tarHeights[i] - heights[i]) * 0.2);
        if (Math.abs(tarHeights[i] - heights[i]) < 1) 
            heights[i] = tarHeights[i];
        containers[i].style = 'height: ' + heights[i] + 'px;';
    }
}

function initBtns() {
    dropdownBars = document.getElementsByClassName('dropdownBar');
    for (var i = 0; i < dropdownBars.length; i++) {
        var contentContainer = dropdownBars[i].getElementsByClassName('contentContainer')[0];
        containers.push(contentContainer);
        var content = contentContainer.getElementsByClassName('content')[0];
        var maxHeight = content.offsetHeight;
        var tarHeight = (dropdownBars[i].className.includes(' hidden') ? 0 : maxHeight);
        contentContainer.style = 'height: ' + tarHeight + 'px;';
        maxHeights.push(maxHeight);
        tarHeights.push(tarHeight);
        heights.push(tarHeight);
        dropdownBars[i].getElementsByClassName('titleBar')[0].onclick = function(event) {
            var parent = event.target.parentNode;
            parent.className = (parent.className.includes(' hidden') ? parent.className.replace(' hidden', '') : parent.className + ' hidden');
        };
    }
    setInterval(updateContainerHeights, 15);
}
