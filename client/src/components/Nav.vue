<template>
    <nav>
        <ul id="nav-bar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Moar Menu</a></li>
        </ul>
    </nav>
</template>

<style lang="scss">
    #nav-bar {
        display: inline-block;
        list-style-type: none;

        display: flex;
        
        li {
            padding: 10px;
        }

        a {
            color: white;
            font-size: 20px;
        }
    }
</style>
