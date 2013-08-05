define([
	'crafty'
], function(Crafty) {

	var Sprites = {
		register: function() {
			/* CHARACTER SPRITES */

			// Player
			Crafty.sprite(32, 32, 'assets/sprites/joey.png', {
				player:	[1, 0]
			});

			// Player Clothing
			Crafty.sprite(32, 32, 'assets/sprites/gear/cape.png', {
			    cape: [1, 0]
			});

			Crafty.sprite(32, 32, 'assets/sprites/gear/white_armor.png', {
			    white_armor: [1, 0]
			});

			Crafty.sprite(32, 32, 'assets/sprites/gear/green_sweater.png', {
			    green_sweater: [1, 0]
			});

			/* EXTERIOR SPRITES */

			// Flooring
			Crafty.sprite(32, 'assets/sprites/exterior_floor_32.png', {
			    e_floor_32_stone:                    [0, 0],
			    e_floor_32_barrel:                   [1, 0],
			    e_floor_32_wood:                     [2, 0],
			    e_floor_32_sand:                     [3, 0],
			    e_floor_32_sandstone:                [4, 0],
			    e_floor_32_cobblestone:              [5, 0],
			    e_floor_32_cobblestone_dirty_small:  [6, 0],
			    e_floor_32_cobblestone_dirty_big:    [7, 0],
			    e_floor_32_sandstone_dirty_small:    [8, 0],
			    e_floor_32_sandstone_dirty_big:      [9, 0],
			    e_floor_32_grass:                    [10, 0]
			});

			Crafty.sprite(64, 'assets/sprites/exterior_floor_64.png', {
			    e_floor_64_wood:                [0, 0],
			    e_floor_64_cobblestone_dirty:   [1, 0],
			    e_floor_64_sandstone_dirty:     [2, 0],
			    e_floor_64_cobblesand_mixture:  [3, 0],
			    e_floor_64_grass:               [4, 0]
			});

			// Stairs
			Crafty.sprite(64, 32, 'assets/sprites/exterior_stairs_64_32.png', {
			    e_stairs_64_32_fine_wood:           [0, 0],
			    e_stairs_64_32_fine_wood_blue:      [1, 0],
			    e_stairs_64_32_fine_stone:          [2, 0],
			    e_stairs_64_32_stone:               [3, 0],
			    e_stairs_64_32_wood:                [4, 0],
			    e_stairs_64_32_cobblesand_mixture:  [5, 0],
			    e_stairs_64_32_sandstone:           [6, 0],
			    e_stairs_64_32_cobblestone:         [7, 0]
			});

			// Rails
			Crafty.sprite(32, 'assets/sprites/exterior_rails_32.png', {
			    e_rails_32_center:          [0, 0],
			    e_rails_32_right_corner:    [1, 0],
			    e_rails_32_left_corner:     [2, 0],
			    e_rails_32_right_end:       [3, 0],
			    e_rails_32_left_end:        [4, 0]
			});

			// Walls
			Crafty.sprite(96, 64, 'assets/sprites/exterior_walls_96_64.png', {
			    e_walls_96_64_stone:  [0, 0]
			});

			// Flowers
			Crafty.sprite(64, 'assets/sprites/exterior_flowers_64.png', {
			    e_flowers_64_purple:    [0, 0],
			    e_flowers_64_roses:     [1, 0],
			    e_flowers_64_straw:     [2, 0],
			    e_flowers_64_multi:     [3, 0],
			    e_flowers_64_yellow:    [4, 0],
			    e_flowers_64_empty:     [5, 0],
			    e_flowers_64_bush:      [6, 0]
			});

			/* PRESET SPRITES */

			// Houses
			Crafty.sprite(224, 256, 'assets/sprites/preset_house_1.png', {
			    preset_house_1:  [0, 0]
			});

			/* Additional Sprites */

			// Flooring
			Crafty.sprite(32, 'assets/sprites/solid.png', {
			    solid:  [0, 0]
			});
		}
	}

	return Sprites;
	
});