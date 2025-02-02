// FILE: entity.js
// AUTHOR: Matt Hardin, Nathan Robertson, Richie Burch, Matthew Deberry, Tanner Russell
// PURPOSE: Implement google_blocks to map to Minecraft().entity methods.

// JSON Block Layout
Blockly.defineBlocksWithJsonArray([
    {
        //BLOCK: mc.entity.getPos()
        "type": "entity_get_position",
        "message0": "Get position of other player: %1",
        "args0": [
          {
            "type": "input_value",
            "name": "ENTITYID",
            "check": "Number"
          }
        ],
        "output": "Vector",
        "colour": 90,
        "extensions": ["empty_input_warning"],
        "tooltip": "Get position of specified player.",
        "helpUrl": ""
    },
    {
        //BLOCK: mc.entity.setPos()
        "type": "entity_set_position",
        "message0": "Set position of %1 to %2",
        "args0": [
          {
            "type": "input_value",
            "name": "ENTITYID",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VECTOR",
            "check": "Vector"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 90,
        "extensions": ["empty_input_warning"],
        "tooltip": "Move the specified player to the provided location.",
        "helpUrl": ""
    },
    {
        //BLOCK: mc.entity.getTilePos()
        "type": "entity_get_tile_position",
        "message0": "Get position directly under:  %1",
        "args0": [
          {
            "type": "input_value",
            "name": "ENTITYID",
            "check": "Number"
          }
        ],
        "output": "Vector",
        "colour": 90,
        "extensions": ["empty_input_warning"],
        "tooltip": "Get the position of the block located directly under the supplied player.",
        "helpUrl": ""
    },
    {
        // BLOCK: mc.entity.setTilePos()
        "type": "entity_set_tile_position",
        "message0": "Set position of  %1 on top of  %2",
        "args0": [
          {
            "type": "input_value",
            "name": "ENTITYID",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VECTOR",
            "check": "Vector"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 90,
        "extensions": ["empty_input_warning"],
        "tooltip": "Move the provided player on top of the provided position.",
        "helpUrl": ""
    },
    {
        // BLOCK: mc.entity.getDirection()
        "type": "entity_get_direction",
        "message0": "Get direction of other player:  %1",
        "args0": [
          {
            "type": "input_value",
            "name": "ENTITYID",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 90,
        "extensions": ["empty_input_warning"],
        "tooltip": "Get the direction of the provided player.",
        "helpUrl": ""
    },
    {
        // BLOCK: mc.entity.getRotation()
        "type": "entity_get_rotation",
        "message0": "Get rotation of other player:  %1",
        "args0": [
          {
            "type": "input_value",
            "name": "ENTITYID",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 90,
        "extensions": ["empty_input_warning"],
        "tooltip": "Get rotation of the provided player.",
        "helpUrl": ""
    },
    {
        "type": "entity_get_pitch",
        "message0": "Get pitch of other player: %1",
        "args0": [
          {
            "type": "input_value",
            "name": "ENTITYID",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 90,
        "extensions": ["empty_input_warning"],
        "tooltip": "Get pitch of the provided player.",
        "helpUrl": ""
    }

]);


// Code Generation Functions
Blockly.Python['entity_get_position'] = function(block) {
    var value_entityid = Blockly.Python.valueToCode(block, 'ENTITYID', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.entity.getPos('+value_entityid+')';
    if(block.getParent() === null) {
      return [code+'\n', Blockly.Python.ORDER_NONE];
    } else {
      return [code, Blockly.Python.ORDER_NONE];
    }
  };
  Blockly.Python['entity_set_position'] = function(block) {
    var value_entityid = Blockly.Python.valueToCode(block, 'ENTITYID', Blockly.Python.ORDER_ATOMIC);
    var value_vector = Blockly.Python.valueToCode(block, 'VECTOR', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.entity.setPos('+value_entityid+', '+value_vector+')\n';
    return code;
  };
  Blockly.Python['entity_get_tile_position'] = function(block) {
    var value_entityid = Blockly.Python.valueToCode(block, 'ENTITYID', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.entity.getTilePos('+value_entityid+')';
    if(block.getParent() === null) {
      return [code+'\n', Blockly.Python.ORDER_NONE];
    } else {
      return [code, Blockly.Python.ORDER_NONE];
    }
  };
  Blockly.Python['entity_set_tile_position'] = function(block) {
    var value_entityid = Blockly.Python.valueToCode(block, 'ENTITYID', Blockly.Python.ORDER_ATOMIC);
    var value_vector = Blockly.Python.valueToCode(block, 'VECTOR', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.entity.setTilePos('+value_entityid+', '+value_vector+')\n';
    return code;
  };
  Blockly.Python['entity_get_direction'] = function(block) {
    var value_entityid = Blockly.Python.valueToCode(block, 'ENTITYID', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.entity.getDirection('+value_entityid+')';
    if(block.getParent() === null) {
      return [code+'\n', Blockly.Python.ORDER_NONE];
    } else {
      return [code, Blockly.Python.ORDER_NONE];
    }
  };
  Blockly.Python['entity_get_rotation'] = function(block) {
    var value_entityid = Blockly.Python.valueToCode(block, 'ENTITYID', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.entity.getRotation('+value_entityid+')';
    if(block.getParent() === null) {
      return [code+'\n', Blockly.Python.ORDER_NONE];
    } else {
      return [code, Blockly.Python.ORDER_NONE];
    }
  };
  Blockly.Python['entity_get_pitch'] = function(block) {
    var value_entityid = Blockly.Python.valueToCode(block, 'ENTITYID', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.entity.getPitch('+value_entityid+')';
    if(block.getParent() === null) {
      return [code+'\n', Blockly.Python.ORDER_NONE];
    } else {
      return [code, Blockly.Python.ORDER_NONE];
    }
  };
