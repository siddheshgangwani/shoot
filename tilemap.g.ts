// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`42000a00040101030301010101060303010101010101010101010103010101010103030101010101010101010101060101010101010303030101010103010601010105010101010101010306030101030301010101030303010101010103010601060101030101010303030101010103010101030303030303030101010303010103030301010101030301010303030103030101010103030103030101010103010601010101030101030301010101010303030303010101010101030101030301010303060303030101060301010101010101030101010103010601030303010103010103010303030101030101010101010301010101010301030101010601030101030206060606030101060301010101010103030101010303060601010603010103030303010301010103030101010101030301010101010301030303010101030103030303060606030301010303030301010103010101010303030301030303010106010101010101010103010101010103030301010601010301010103030101010101010103060606050101010101010301010101010101010101010101010101030303030301030101010303010303030103010301010101010301010601030301030303030303010303010101010101010101010301010303030303010303030303030101010101030303030103030301010101010103010101030301060606030306010603010601010603010101010101010601030301060103010101010101010101030101010106010103030103030301010106010103030101030301010101030101010103010101010103060101010101010101030101010103010106010101010101010301010101010101010101010101010101010101010101010301010101030106010103010101010603010106`, img`
...22.....22...........2.....22..................222....2.........
....2.2..22....222.....2......2...222....2...2222222...22..222....
22..222.22....22.22....2......2..22.....22222......2..22..22.222..
.2.......2....2...222..2..2.222..2......2.....2.2.....2..2.....2..
.2......22...22.....2..2222.2...22.....22.....2.222...2.2222...22.
.2222...2....2222.222...........2.....222.....2...22.......2......
....2................22222.2...22.222.2.2.....2....22.222222.22...
.......2..22222.222222.....2222.222......2...22....22...2.....2...
......22...2.........2.......22.222......22..22....2....2.....2...
......2....2..........2.......................2....2....2.....2...
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,sprites.builtin.forestTiles0,myTiles.tile2,sprites.castle.tilePath5,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
